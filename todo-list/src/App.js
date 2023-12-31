import './css/App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="nav-bar">
        <nav>
          <ul>
            <li><NavLink to={"/"}>Home &nbsp;&nbsp;&nbsp;|</NavLink></li>
            <li><NavLink to={"/done"}>Done List &nbsp;&nbsp;&nbsp;&nbsp;|</NavLink></li>
            <li><NavLink to={"/help"}>Help</NavLink></li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
