import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./css/sb-admin-2.css";
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './User';
import Usercreate from './Usercreate';
import Viewuser from './Viewuser'
import Edituser from './Edituser';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Routes>
            <Route path='/Dashboard' element={<Dashboard/>}> </Route>
            <Route path='/User' element={<User/>}> </Route>
            <Route path='/Usercreate' element={<Usercreate/>}> </Route>  
            <Route path='/User/:id' element={<Viewuser/>}> </Route>  
            <Route path='/edit/:id' element={<Edituser/>}> </Route>
          </Routes>
          
        </div>  
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
