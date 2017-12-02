var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
 challenge: {
    type: String,
    required: true,
    minlength: 10,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var otherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 123
})

module.exports = {Todo};
