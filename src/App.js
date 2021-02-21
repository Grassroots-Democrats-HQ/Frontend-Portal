import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Postcarding from "views/admin/Postcarding.js";
import Creditlog from "views/admin/Creditlog.js";
import Homepage from "views/Homepage"

//firebase

import firebase from "Firebase"

export default function App() {
  const [signedIn, setSignedIn] = useState(false)

  // function AddUserToFirebase(uid)
  // {
  //   firebase.database().ref(`/creditlogs/${uid}`).set({"timeMetadata": new Date().getTime()})
  // }

  // useEffect(() =>
  // {
  //   if (signedIn)
  //   {
  //     firebase.database().ref(`/creditlogs/${firebase.auth().currentUser.uid}`).once('value', snapshot => {
  //       if (snapshot.exists()) {
  //         console.log("found user's creditlog data in firebase.")
  //       } else {
  //         console.log("didn't find user's creditlog data in firebase. Creating new section in firebase for user.")
  //         AddUserToFirebase(firebase.auth().currentUser.uid)
  //       }
  //     })
  //   }
  // },[signedIn]);

  return (
    <>
      {signedIn ?
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-gray-200">
            <AdminNavbar setSignedIn={setSignedIn}/>
            {/* Header */}
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/maps" exact component={Maps} />
                <Route path="/postcarding" exact component={Postcarding} />
                <Route path="/creditlog" exact component={Creditlog} />
                <Redirect from="*" to="/dashboard" />
              </Switch>
              <FooterAdmin />
            </div>
          </div>
        </>
        :
        <>
          <Homepage signedIn={signedIn} setSignedIn={setSignedIn} />
        </>
      }
    </>
  );
}
