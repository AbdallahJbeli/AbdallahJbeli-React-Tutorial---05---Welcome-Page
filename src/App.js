import './App.css';
import { Navbar, Content, Footer } from './components';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Navbar />
      </div>
      <div className='content'>
        <Content />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
