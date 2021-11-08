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
  switch (action.type){
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              done: !item.done
            };
          }
          return item;
        })
      };
    default:
      return state;
  }  
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state: ', state);
  const handleItemClick = (e) => {
    console.log(e.target.dataset.itemid);
    dispatch({type: "TOGGLE_TODO", payload:e.target.dataset.itemid })
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
