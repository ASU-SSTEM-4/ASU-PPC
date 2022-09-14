import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero/>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </header>
    </div>
  );
}

export default App;
