import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import firebase from "Firebase"

import TableDropdown from "components/Dropdowns/TableDropdown.js";

// Todo: Make this more module through adding component/variable for each cell

export default function MyCreditLog({ color }) {

  const [creditData, setCreditData] = useState([])
  const [newCredit, setNewCredit] = useState({})
  const [addCreditActive, setAddCreditActive] = useState(false)

  useEffect(() => {
    let ref = firebase.database().ref("/creditlogs").child(firebase.auth().currentUser.uid)
    console.log("User uid: " + firebase.auth().currentUser.uid)
    ref.on("value", snapshot => {
      const state = snapshot.val()
      if (state != null)
      {
        setCreditData(state)
      } else {
        setCreditData([])
      }
      console.log("Credit Log Data:")
      console.log(state)
    })
  }, [])


  function handleAddCreditPressed()
  {
    setAddCreditActive(true)
  }

  function handleSubmitCredit()
  {
    let ref = firebase.database().ref("creditlogs").child(firebase.auth().currentUser.uid).child(new Date().getTime())
    ref.set(newCredit)
    setAddCreditActive(false)
  }

  function handleEditCredit(event)
  {

  }

  function handleDeleteCredit(event)
  {
    let x = window.confirm("Are you sure you want to delete this credit?")
    if (x)
    {
      let index = parseInt(event.target.getAttribute('keyval'))
      let keyToDelete = Object.keys(creditData)[index]
      let ref = firebase.database().ref("creditlogs").child(firebase.auth().currentUser.uid).child(keyToDelete)
      ref.set({})
    }
  }

  return (
    <>
      {addCreditActive ?
        <>
          <div className="flex flex-wrap content-evenly" style={{ position: "fixed", zIndex: 999, top: 0, left: 0, backgroundColor: "rgba(200, 200, 200, 0.4)", width: "100vw", height: "100vh" }}>
            <div className="rounded-lg" style={{ margin: "auto", width: "40vw", height: "90vh", backgroundColor: "#fafafa", overflow: "auto" }}>
              {/* Title */}
              <h1 className="text-3xl text-center mt-3">
                Add/Edit A Credit
              </h1>

              {/* Form */}
              <div className="" style={{ padding: 20 }}>
                <div className="">
                  Date:
                  <input
                    onChange={e => setNewCredit({ ...newCredit, date: e.target.value })}
                    type="text"
                    placeholder="Date"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>

                <div className="flex">
                <div className="mr-2 my-2">
                  Time In:
                  <input
                    onChange={e => setNewCredit({ ...newCredit, timeIn: e.target.value })}
                    type="text"
                    placeholder="Time In"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>

                <div className="ml-2 my-2">
                  Time Out:
                  <input
                    onChange={e => setNewCredit({ ...newCredit, timeOut: e.target.value })}
                    type="text"
                    placeholder="Time Out"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>
                </div>
                <div className=" my-2">
                  Activity:
                  <input
                    onChange={e => setNewCredit({ ...newCredit, type: e.target.value })}
                    type="text"
                    placeholder="ex. recruit, campaign, postcards, ..."
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>
                
                <div className=" my-2">
                  Hours:
                  <input
                    onChange={e => setNewCredit({ ...newCredit, hours: e.target.value })}
                    type="text"
                    placeholder="Number of Hours"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>

                <div className="my-2">creditData
                  Description:
                  <textarea
                    onChange={e => setNewCredit({ ...newCredit, description: e.target.value })}
                    type="text"
                    placeholder="Time In"
                    rows="3"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
                </div>

                <button onClick={handleSubmitCredit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Submit Credit
                </button>
                <button onClick={() => {setAddCreditActive(false)}} className="mx-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Close
                </button>

              </div>
            </div>
          </div>
        </>
        : null}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                My Credit Log
              </h3>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className="overflow-x-hidden">
                <th
                  className={
                    "whitespace-no-wrap px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Date
                </th>
                <th
                  className={
                    "whitespace-no-wrap px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Time In
                </th>
                <th
                  className={
                    "whitespace-no-wrap px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Time Out
                </th>
                <th
                  className={
                    "whitespace-no-wrap px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Type
                </th>
                <th
                  className={
                    "whitespace-no-wrap px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Hours
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Description
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }></th>
              </tr>
            </thead>


            <tbody className="pr-0">
              {/* loop through fetched credit data and add rows */}
              {Object.values(creditData).map((credit, index) => {
                return (<tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4">
                    {credit.date}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4">
                    {credit.timeIn}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4">
                    {credit.timeOut}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4">
                    {credit.type}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm p-4">
                    {credit.hours}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                    {credit.description}
                  </td>
                  <td className="border-t-0 px-auto align-middle border-l-0 border-r-0 text-center p-4">
                    {/* <TableDropdown /> */}
                    <button keyval={index} onClick={handleEditCredit} className="bg-black text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Edit
                    </button>
                    <button keyval={index} onClick={handleDeleteCredit} className="bg-red-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Delete
                    </button>
                  </td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={handleAddCreditPressed} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Add Credit
      </button>
    </>
  );
}

MyCreditLog.defaultProps = {
  color: "light",
};

MyCreditLog.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
