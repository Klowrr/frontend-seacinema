import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/auth-context';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { Profile, MyProfile, MyWallet } from './pages/profile';
import MovieDetail from './pages/movieDetail';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/:id' element={<MovieDetail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/tickets' element={<h1>Tickets</h1>} />
          <Route path='/profile' element={<Profile/>}>
            <Route index element={<MyProfile/>}/>
            <Route path='wallet' element={<MyWallet/>}/>
          </Route>
          <Route path='/transactions' element={<h1>Transactions</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
