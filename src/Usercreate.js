import React from 'react'

function Usercreate() {
    return (
       <div class="container"> 
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type={"text"} className="form-control" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type={"text"} className="form-control" />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'>
                        <label>Country</label>
                        <div className='form-control'>
                            <select>
                                 <option>India</option>
                                <option>America</option>
                                <option>china</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'>
                        <label>State</label>
                        <div className='form-control'>
                            <select>
                                 <option>India</option>
                                <option>America</option>
                                <option>china</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'>
                        <label>City</label>
                        <div className='form-control'>
                            <select>
                                 <option>India</option>
                                <option>America</option>
                                <option>china</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'>
                        <label>Phone</label>
                        <input type={"text"} className="form-control" />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'>
                        <label>Date of birth</label>
                        <input type={"Date"} className="form-control" />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'>
                        <label>Gendar</label>
                        <div className='form-control'>
                            <select>
                                 <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='form-group'>
                        <input type={"Submit"} className="btn btn-primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usercreate;