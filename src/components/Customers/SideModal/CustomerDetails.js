import React from 'react';
import '../../../assets/css/customer-details.css';

function CustomerDetails () {

    return (
        <div>
            <div className="customer-form pt-1">
                <div className="container">

                    <h4>Create Customers</h4>

                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="name pt-4">
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

                        <div class="form-group mb-0 pt-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                <label class="form-check-label" for="invalidCheck2">
                                    Create a WordPress User
                                </label>
                            </div>
                        </div>

                        <div className="name pt-2">
                            <label>Password</label>
                            <input type="text" placeholder="**********"/> <a href="#">*</a>
                        </div>

                        <div class="form-group mb-0 pt-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                <label class="form-check-label" for="invalidCheck2">
                                    Automatically generate a password
                                </label>
                            </div>
                        </div>

                        <div class="form-group mb-0 pt-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                <label class="form-check-label" for="invalidCheck2">
                                    Send customer login information
                                </label>
                            </div>
                        </div>

                        <div className="buttons">
                            <button type="button" class="float-left btn btn-primary btn-sm">Create Customer</button>
                            <button type="button" class="float-right btn btn-secondary btn-sm">Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default CustomerDetails;