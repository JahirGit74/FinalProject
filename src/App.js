
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar></Navbar>
          <Home></Home>
          <Footer name={"Jahir"} num={123}></Footer>
        </div>
      </header>
    </div>
  );
}

export default App;
