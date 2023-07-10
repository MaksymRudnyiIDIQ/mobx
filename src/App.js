import logo from './logo.svg';
import './App.css';

import { observer } from 'mobx-react-lite'
import { TodoList} from "./todoList";
import { AddTodo} from "./addTodo";
import {Header} from "./header";

const App = observer(() => {

  return (
    <div className="App">
      <Header/>
      <TodoList/>
      <AddTodo/>
    </div>
  );
})

export default App;
