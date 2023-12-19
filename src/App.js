import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { Profile, MyProfile, MyWallet } from './pages/profile';
import MovieDetail from './pages/movieDetail';
import { AuthContextProvider } from './context/auth-context';
import Tickets from './pages/tickets';
import { BookingContextProvider } from './context/booking-context';
import Booking from './pages/booking';
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <BookingContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
              <Route path='/movie/:id' element={<MovieDetail/>}/>
              <Route path='/transactions' element={<Booking/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/tickets' element={<Tickets/>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/profile' element={<Profile/>}>
              <Route index element={<MyProfile/>}/>
              <Route path='wallet' element={<MyWallet/>}/>
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BookingContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
