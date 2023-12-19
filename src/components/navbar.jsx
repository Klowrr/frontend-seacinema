import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
  const [open, setOpen] = useState(false);
  return (
    <header className={`flex w-full items-center h-[10vh] shadow-md`}>
      <div className="container">
        <div className="relative mx-4 flex items-center justify-between">
          <div className="w-fit max-w-full px-4">
            <Link to='/'>
              <h1 className="font-bold text-xl">SEACINEMA</h1>
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/" className='hidden lg:block'>Home</ListItem>
                  <ListItem NavLink="/profile" className='lg:hidden'>Profile</ListItem>
                  <ListItem NavLink="/ticket">Ticket</ListItem>
                  <ListItem NavLink="/about">About</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end items-center pr-16 sm:flex lg:pr-0">
              {user.logged ? (
                <Link to='/profile'>Halo {user.name}</Link>
              ):(
                <>
                  <Link
                  to="/login"
                  className="px-4 py-2"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="rounded-md bg-primary px-4 py-2 text-white bg-blue-500 hover:bg-blue-300"
                  >
                    Sign Up
                  </Link>
                </>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink, className }) => {
  return (
    <>
      <li>
        <Link
          to={NavLink}
          className={`flex py-2 text-base font-medium text-body-color lg:mx-6 hover:text-gray-400 lg:inline-flex ${className}`}
        >
          {children}
        </Link>
      </li>
    </>
  );
};
