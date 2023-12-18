import React, { useState } from 'react'
import ManageCategory from '../Components/ManageCategory'
import ViewList from '../Components/ViewList'

function Dashboard() {
  const [selectedView, setSelectedView] = useState("manage")
  return (
    <div style={{height:'100dvh'}}>
      <div className="row m-0 p-0">
        <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2 py-4" style={{backgroundColor:'#d4f3f3'}}>
          <button className='btn btn-light rounded-4 w-100 my-2 text-light' style={{backgroundColor:'#25aab7',fontWeight:'500'}} onClick={() => setSelectedView("manage")}>Manage Categories</button>
          <button className='btn btn-light rounded-4 w-100 my-2 text-light' style={{backgroundColor:'#25aab7',fontWeight:'500'}} onClick={() => setSelectedView("view")}>View List</button>
        </div>
        <div className="col-sm-12 col-md col-lg col-xl rounded-4 p-4">
          {
            selectedView === "manage" ?
            <ManageCategory /> :
            <ViewList />
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard