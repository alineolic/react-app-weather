import "./styles.css";
import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";
import Credits from "./Credits";
import Precipitation from "./Precipitation";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Search />
        <City />
        <Temperature />
        <Precipitation />
      </div>
      <Credits />
    </div>
  );
}