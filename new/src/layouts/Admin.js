import React, { useState } from "react";
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
import Tables from "views/admin/Tables.js";
import Homepage from "views/Homepage"

export default function Admin() {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <>
      {signedIn ?
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-gray-200">
            <AdminNavbar />
            {/* Header */}
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/maps" exact component={Maps} />
                <Route path="/postcarding" exact component={Postcarding} />
                <Route path="/tables" exact component={Tables} />
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