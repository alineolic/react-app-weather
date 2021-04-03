import logo from './logo.svg';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          hello from react
        </h1>
        <Weather city="New Yorl" /> 
      </header>
    </div>
  );
}

export default App;
