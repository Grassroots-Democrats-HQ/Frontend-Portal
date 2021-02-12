/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase">
              <img className="inline-block mr-4" src="https://grassrootsdems.org/wp-content/uploads/2019/06/Logo-GDHQ-V16.png" style={{ height: 50 }} />
              Grassroots Democrats HQ
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
