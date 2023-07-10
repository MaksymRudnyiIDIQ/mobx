import { makeAutoObservable,  reaction,  toJS } from 'mobx'


export default class Store {
  todos = [];
  name = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    reaction(() => this.todos.length, () => {
      console.log('send todos to server: ', toJS(this.todos))
    })
  }

  get countOfCompleted() {
    return this.todos.filter((todo) => todo.completed).length
  }


  completeTodo(id) {
    const todo = this.todos.find((item) => item.id === id);
    todo.completed = true;
  }

  addTodo(task) {
    this.todos.push({
      title: task,
      completed: false,
      id: Date.now()
    })
  }
}