import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { MyProfile, MyWallet } from './pages/profile';
import MovieDetail from './pages/movieDetail';
import { AuthContextProvider } from './context/auth-context';
import { BookingContextProvider } from './context/booking-context';
import { TicketsActive, TicketsCanceled, TicketsPassed } from './pages/tickets';
import ProtectedRoute from './utils/protectedRoute';
import Booking from './pages/booking';
import LayoutTicket from './layouts/layoutTicket';
import Layout from './layouts/layout';
import LayoutProfile from './layouts/layoutProfile';
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <BookingContextProvider>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/movie/:id' element={<MovieDetail/>}/>
              <Route path='/about' element={<h1>About</h1>} />
              <Route element={<ProtectedRoute/>}>
                <Route path='/tickets' element={<LayoutTicket/>}>
                  <Route index path='upcoming' element={<TicketsActive/>}/>
                  <Route path='passed' element={<TicketsPassed/>}/>
                  <Route path='canceled' element={<TicketsCanceled/>}/>
                </Route>
                <Route path='/transactions' element={<Booking/>} />
                <Route path='/profile' element={<LayoutProfile/>}>
                  <Route path='me' element={<MyProfile/>}/>
                  <Route path='wallet' element={<MyWallet/>}/>
                </Route>
              </Route>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BookingContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
