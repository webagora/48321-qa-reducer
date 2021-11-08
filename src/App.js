import { useReducer } from 'react';
import './App.css';

const initialState = {
  todos: [
      {title: "todo 1", done: true, id: "1111"},
      {title: "todo 2", done: false, id: "2222"},
      {title: "todo 3", done: false, id: "3333"}
      ]
};

const reducer = (state, action) => {
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state: ', state);
  const handleItemClick = (e) => {
    console.log(e.target.dataset);
  }
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <ul>
        {
          state.todos.map(item => {
            return <li onClick={handleItemClick} data-itemid={item.id} key = {item.id}>
              {item.title} {item.done && <span>- Done</span>}
              </li>
          })
        }
       
      </ul>
      <div>
        <input />
        <button>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
