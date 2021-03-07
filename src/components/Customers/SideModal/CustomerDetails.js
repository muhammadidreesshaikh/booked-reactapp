import React from 'react';

function CustomerDetails () {

    return (
        <div>
            <div className="customer-form pt-1">
                <div className="container">

                    <h4>Create Customers</h4>

                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="name pt-5">
                            <label>FIRST NAME</label>
                            <input type="text" placeholder="Joe"/> <a href="#">*</a>
                        </div>

                        <div className="name pt-3">
                            <label>LAST NAME</label>
                            <input type="text" placeholder="Semth"/> <a href="#">*</a>
                        </div>

                        <div className="name pt-3">
                            <label>Email</label>
                            <input type="text" placeholder="joe@semth.com"/> <a href="#">*</a>
                        </div>

                        <div className="name pt-3">
                            <input type="number" placeholder="Phone Number"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default CustomerDetails;