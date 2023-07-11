import './App.css';
import { Header } from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';
import BookmarkPage from './pages/BookmarkPage';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<MainPage/>}/>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/products/list' element={<ProductListPage/>}/>
          <Route path='bookmark' element={<BookmarkPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
