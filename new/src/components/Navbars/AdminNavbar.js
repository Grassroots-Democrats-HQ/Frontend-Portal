import React from "react";
import firebase from "../../Firebase"

export default function Navbar() {
  function signOut()
  {
    firebase.auth().signOut()
    window.open("/", "_self")
  }
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
          >
            Dashboard
          </a>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <a className="text-gray-600 block">
              <div className="items-center flex">
              <p className="text-white mr-3"> Welcome {firebase.auth().currentUser.displayName.split(" ")[0]}! </p>
              {/* <p className="text-black mr-3"> {firebase.auth().currentUser.displayName}</p> */}
                <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
                  <img
                    alt="..."
                    className="w-full rounded-full align-middle border-none shadow-lg"
                    src={firebase.auth().currentUser.photoURL}/>
                </span>
                <button className="ml-3 bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
              onClick = {signOut}>
                Sign Out
              </button>
              </div>
            </a>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
