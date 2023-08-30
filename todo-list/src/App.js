import './css/App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="app">
      <div className="nav-bar">
        <nav>
          <ul>
            <li><a href={"/"}>Home</a></li>
            <li><a href={"/done"}>Done List</a></li>
            <li><a href={"/help"}>Help</a></li>
          </ul>
        </nav>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
