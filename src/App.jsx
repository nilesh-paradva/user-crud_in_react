import Home from './pages/Home';
import UserCart from './pages/UserCart';
import UserSingleView from './pages/UserSingleView';
import UserView from './pages/UserView';
import UserEdit from './pages/UserEdit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/usercart' element={<UserCart />} />
          <Route path='/usersingleview/:id' element={<UserSingleView />} />
          <Route path='/userview' element={<UserView />} />
          <Route path='/useredit/:id' element={<UserEdit />} />
        </Routes>
      </Router>
    </>
  )
}

export default App