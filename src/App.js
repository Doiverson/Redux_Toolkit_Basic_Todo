import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
        <h1>Todos List</h1>
        <AddTodo/>
        <TodoList/>
    </div>
  );
}

export default App;
