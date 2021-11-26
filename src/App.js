import SignUp from "./components/login";
import DashBoard from "./components/dashboard";
import { Route, Routes } from 'react-router'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from "./components/admin";
import ExistingUsers from "./components/existingUsers";
import UserForm from "./components/addUser";



function App() {
  return (
    <div className='app'>

      <Routes>
        <Route path='/' element={<SignUp />} exact={true} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/dashboard/admin' element={<Admin />} />
        <Route path='/dashboard/admin/allUsers' element={<ExistingUsers />} />
        <Route path='/dashboard/admin/addUser' element={<UserForm />} />
      </Routes>
    </div>


  );
}

export default App;
