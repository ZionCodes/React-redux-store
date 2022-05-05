import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Productdetail from './components/Productdetail';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact component={ProductList} />
          <Route path='/product/:productid' exact component={Productdetail} />
          <Route>404 not found!</Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
