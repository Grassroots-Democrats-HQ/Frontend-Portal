/*eslint-disable*/
import React, { useEffect } from "react";
import firebase, { signInWithGoogle } from "../Firebase"
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Homepage(props) {
  // When user signedIn state changes change the page
  useEffect(() => {
    console.log("Signed in: " + props.signedIn)
  }, [props.signedIn])

  // Attach an event listener that listens for changes in auth state and updates the signedIn bool
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      props.setSignedIn(!!user)
    })
  }, [])

  return (
    <>
      <HomeNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-gray-700">
                GDHQ Admin Portal
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {/* implement random phrase here */}
                More efficiency, more democracy!
              </p>
              <div className="mt-12">
                Sign in with
                <button
                  onClick={signInWithGoogle}
                  className="mx-4 bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button">
                  <img alt="..." className="w-5 mr-1" src={require("assets/img/google.svg")} /> Google
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute b-auto right-0 pt-8 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/pattern_react.png")}
          alt="..."
        />
      </section>
      <Footer />
    </>
  );
}
