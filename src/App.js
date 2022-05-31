import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Contract from './Component/Contract/Contract';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import SignUp from './Component/Login/SignUp';
import Footer from './Component/Shared/Footer';
import Navbar from './Component/Shared/Navbar';


function App() {
 
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>  
)
}
export default App;


