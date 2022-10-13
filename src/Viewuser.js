import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

function Viewuser() {
    const params = useParams();
     let searchParams = useSearchParams();
     
   
     
  return (
    <div class="container">
        <div className='row'>
            {/* <h2> id :{params.id}</h2> */}
            <div className='col-lg-6'>
              username : person1
            </div>
            <div className='col-lg-6'>
              email : person1gmail
            </div>
            <div className='col-lg-6'>
              country : person1
            </div>
            <div className='col-lg-6'>
              state : person1
            </div>
            <div className='col-lg-6'>
              city : person1
            </div>
            <div className='col-lg-6'>
              phone : person1
            </div>
            <div className='col-lg-6'>
              dob : person1
            </div>
            <div className='col-lg-6'>
             gendar : person1
            </div>
        </div>
    </div>
  )
}

export default Viewuser;