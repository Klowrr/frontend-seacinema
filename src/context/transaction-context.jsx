import { createContext, useContext, useState } from "react";

export const BookingContext = createContext();

export function BookingContextProvider({ children }) {
  const [showtimeData,setShowtimeData] = useState([])
  const [movieData,setMovieData] = useState([])
  const value = {showtimeData,setShowtimeData,movieData,setMovieData}
  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  return useContext(BookingContext);
};