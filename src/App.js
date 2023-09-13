
import './App.css';
import Page from './Components/Block1/Page';
import Details from './Components/Block2/Details';
import Platform from './Components/Block3';
import Platform_next from './Components/Block4';
import Contributors from './Components/Block5';
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
      <Platform_next/>
      <Contributors/>
    </div>
  );
}

export default App;
