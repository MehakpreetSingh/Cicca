
import './App.css';
import Page from './Components/Block1/Page';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Page/>
    </div>
  );
}

export default App;
