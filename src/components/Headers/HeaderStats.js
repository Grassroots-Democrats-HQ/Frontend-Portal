import React, {useState, useEffect} from "react";
import firebase from "Firebase"

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  const [totalHours, setTotalHours] = useState(0)

  useEffect(() => {
    let ref = firebase.database().ref("creditlogs")

    ref.on("value", snapshot => {
      const creditlogs = snapshot.val()
      let total = 0;

      if (creditlogs != null)
      {
        Object.values(creditlogs).forEach(user => {
          Object.values(user).forEach(credit => {
            if (!isNaN(credit.hours)) {
              total += credit.hours
            }
          })
        })

        setTotalHours(total)
      }
      console.log("Credit data from header")
      console.log(creditlogs)
    })
  }, [])


  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Postcards Sent"
                  statTitle="TBD"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-green-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Hours This Year"
                  statTitle={`${totalHours}`}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Members"
                  statTitle="TBD"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Some Other Metric"
                  statTitle="TBD"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-green-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
