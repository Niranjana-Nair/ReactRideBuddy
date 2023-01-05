
import { Route, Routes } from 'react-router-dom';
import './App.css';
import User from './pages/User';
import AllUsers from './pages/AllUsers';
import UserConfirmation from './pages/UserConfirmation';
import Wheels2 from './pages/Wheels2';
import UserLogin from './pages/UserLogin';
import Home from './pages/home/Home';
import ForgotPassword from './pages/ForgotPassword';
import CheckMail from './pages/CheckMail';
import ChangePassword from './pages/ChangePassword';
import HostRide from './pages/HostRide';
import Wheels from './pages/Wheels';
import GetUser from './pages/GetUser';

function App() {


  return (

    
      <Routes>
        <Route path="/" element={<AllUsers />}></Route>

        <Route path="/add-wheels" element={<Wheels2 />}></Route>

        <Route path="/add-user" element={<User />}></Route>

        <Route path="/confirm-user" element={<UserConfirmation />}></Route>

        <Route path="/user-login" element={<UserLogin />}></Route>

        <Route path="/home-page" element={<Home/>}></Route>

        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>

        <Route path='/check-mail' element={<CheckMail/>}></Route>
        
        <Route path='/change-password' element={<ChangePassword/>}></Route>

        <Route path='/host-ride' element={<HostRide/>}></Route>

        <Route path= "/add-list" element={<Wheels/>}></Route>  

        <Route path="/get-user"   element={<GetUser/>}></Route>

      </Routes>
  );
}

export default App;
