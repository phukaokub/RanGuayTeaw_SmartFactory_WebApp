// import logo from './logo.svg';
// import CounterExample from './components/CounterExample';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './Views/About';
// import Home from './Views/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Product from './Views/Product';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
        <Header />

        <div className='p-3 animation z-0'>
          <Routes>
            {/* <Route path='/' element={<Home/>}/> */}
            <Route path='/About' element={<About/>}/>
            <Route path='/products/:id' element={<Product/>}/>
          </Routes>
        </div>
          <Footer />

      </Router>
    
      {/* //<HelloWorld name="Mek"/> */}
      {/* <CounterExample/> */}
         
    </div>
  );
}

export default App;
