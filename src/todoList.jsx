import { observer } from 'mobx-react-lite'
import store from './store';

export const TodoList = observer(() => {
  const { todos, completeTodo } = store.business;

  if (!todos.length) {
    return <h4>No todos</h4>
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input onChange={() => completeTodo(todo.id)} type={'checkbox'} checked={todo.completed}/>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
})