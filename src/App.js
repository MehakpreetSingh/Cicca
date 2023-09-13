
import './App.css';
import Page from './Components/Block1/Page';
import Details from './Components/Block2/Details';
import Platform from './Components/Block3';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Page/>
      <Details/>
      <Platform />
    </div>
  );
}

export default App;
