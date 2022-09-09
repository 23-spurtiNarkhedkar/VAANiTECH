import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import AboutUS from './components/pages/AboutUS';
import NavBarMain from './components/NavBarMain';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import NotFound from './components/pages/NotFound';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import User from './components/Users/User';
import PortFolio from './components/portfolio/PortFolio';
import CarouselComp from './components/portfolio/CarouselComp';
import Footer from './components/portfolio/Footer';

function App() {
  return (
    <>
      <NavBarMain />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<AboutUS />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/portfolio' element={<PortFolio />} />
          <Route exact path='/user/add' element={<AddUser />} />
          <Route exact path='/user/edit/:id' element={<EditUser />} />
          <Route exact path='/user/:id' element={<User />} />
          <Route  element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
