import './App.css';
import { Header } from './components/header/Header';
import { Routes,Route, BrowserRouter as Router } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { ProductListPage } from './pages/ProductListPage';
import { BookmarkPage } from './pages/BookmarkPage';
import { Footer } from './components/footer/Footer';
import { useEffect } from 'react';
import { getAllItemsService } from './services/api';
import { useDispatch } from 'react-redux';
import { getItems } from './redux/actions/itemsAction';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    getAllItemsService(10).then((res)=>{
      dispatch(getItems(res));
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/products/list' element={<ProductListPage/>}/>
            <Route path='bookmark' element={<BookmarkPage/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
