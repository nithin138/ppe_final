// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Main } from 'react-router-dom';
import AppRoutes from './Routes';
// import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Main>
          <AppRoutes />
      </Main>
    </div>
  );
}

export default App;
