import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function User() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    setUsers([
      {
        id : 1,
        username : "person 1",
        email : "person1gmail.com",
        country : "india",
        state : "tamilnadu",
        city : "chennai",
        phone : "9223414345",
        dob : "3-5-0000",
        gendar :"male",
      },
      {
        id : 2,
        username : "person 2",
        email : "person2gmail.com",
        country : "india",
        state : "tamilnadu",
        city : "madurai",
        phone : "9223414345",
        dob : "23-8-0000",
        gendar :"male",
      },
      {
        id : 3,
        username : "person 2",
        email : "person2gmail.com",
        country : "india",
        state : "tamilnadu",
        city : "madurai",
        phone : "9223414345",
        dob : "23-8-0000",
        gendar :"male",
      }
    ])
  }, [])

  let deleteUser = () =>{
    const result = window.confirm('are u sure to delete this profile')
    if(result){
      alert("deleted")
    }
  }
  
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-item-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">User</h1>
        <Link to={"/Usercreate"} class='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
          <i class='fas fa-download fa-sm text-white-50'></i>Create user
        </Link>
      </div>
      <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank"
          href="https://datatables.net">official DataTables documentation</a>.</p>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>country</th>
                    <th>state</th>
                    <th>city</th>
                    <th>phone</th> 
                    <th>dob</th>
                    <th>gendar</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tfoot>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>country</th>
                    <th>state</th>
                    <th>city</th>
                    <th>phone</th> 
                    <th>dob</th>
                    <th>gendar</th>
                    <th>action</th>
                  </tr>
                 
                </tfoot>
                <tbody>
                  
                 
                 {users.map((user) => {
                    return <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td>{user.state}</td>
                    <td>{user.city}</td>
                    <td>{user.phone}</td>
                    <td>{user.dob}</td>
                    <td>{user.gendar}</td>
                    <td>
                      <Link to={`/user/${user.id }`}className='btn btn-warning mr-1'>
                       View
                      </Link>
                      <Link to={`/edit/${user.id }`}className='btn btn-primary mr-1'>
                       edit
                      </Link>
                      <button onClick={() => deleteUser()} className='btn btn-danger'>delete</button>
                    </td>
                  </tr>
                 })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;