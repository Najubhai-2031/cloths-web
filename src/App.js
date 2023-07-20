import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/contact';
import Shop from './pages/shop';
import Testimonial from './pages/testimonial';
import WhyWe from './pages/why';
import Login from './pages/login';
import Footer from './component/footer';
import Header from './component/Header';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
