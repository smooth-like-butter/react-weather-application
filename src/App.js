import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
    
        <Weather />

        <footer>
          This project was created by Stephanie Schatz and is{" "}
          <a
            href="https://github.com/smooth-like-butter/react-weather-application"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}

