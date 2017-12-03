const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');


beforeEach((done) => {
  Todo.remove({}).then(() => done());  // removes all current todos in our database first
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {   //done argument so it can move on when calling it
    var text = 'Testing for Todos';

    request(app)
      .post('/todos')
      .send({text: text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);  //calling done() calling done lets you move on
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));   
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {  //fetch all todos
          expect(todos.length).toBe(0);
          done();							//calling done() raps up the test case
        }).catch((e) => done(e));
      });
  });
});