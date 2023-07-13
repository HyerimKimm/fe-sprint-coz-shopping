import './App.css';
import { Header } from './components/header/Header';
import { Routes,Route, BrowserRouter as Router } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { ProductListPage } from './pages/ProductListPage';
import { BookmarkPage } from './pages/BookmarkPage';
import { Footer } from './components/footer/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBookmark } from './redux/actions/bookmarkAction';

function App() {
  const dispatch = useDispatch();

  const getBookmarkInLocalStorage = () => {
    const bookmark = JSON.parse(localStorage.getItem('bookmark'));
    dispatch(getBookmark(bookmark));
  }

  useEffect(()=>{
    getBookmarkInLocalStorage();
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
