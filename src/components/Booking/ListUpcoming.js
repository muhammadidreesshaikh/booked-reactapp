import React from 'react';
import '../../assets/css/listupcoming.css';

import image from '../../assets/img/img.png'
import image1 from '../../assets/img/img1.jpg'
import image2 from '../../assets/img/img2.jpg'
import image3 from '../../assets/img/img3.jpg'
import image4 from '../../assets/img/img4.jpg'
import image5 from '../../assets/img/img5.jpg'
import image6 from '../../assets/img/img6.jpg'

class ListUpcoming extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    }

    componentDidMount() {
        console.log("ListUpcoming");

        this.setState({
            loading: true
        });
    }

    render() {
        return (
            <div>
                <div className="upcoming">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="row top">

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="left">
                                            <h2><i class="fas fa-bolt"></i>Booking</h2>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="row center">
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-secondary px-3">PENDING <span>3</span> </button>
                                                <button type="button" class="btn btn-secondary px-3">TODAY <span>6</span> </button>
                                                <button type="button" class="bg-primary btn btn-secondary px-3">UPCOMING <span>8</span> </button>
                                                <button type="button" class="btn btn-secondary px-3">COMPLETED <span>3</span> </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="row right">
                                           <div className="col-md-7 px-0">
                                                <select class="form-control">
                                                    <option selected>All Services</option>
                                                    <option value="1">All Payments</option>
                                                    <option value="2">All Accounts</option>
                                                </select>
                                           </div>

                                            <div className="col-md-4 px-0">
                                                <div className="icon">
                                                    <a href="#"><i class="far fa-calendar-alt btn-primary mr-2"></i></a>
                                                    <a href="#"><i class="fas fa-plus btn-secondary"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12">
                               <div className="row bar">
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <h5 className="float-left">BOOKING DETAILS</h5>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <h5 className="float-right">DATE / TIME</h5>
                                    </div>
                               </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 px-0 border-bottom">
                                <div className="row main">

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="booking-details">
                                            <div className="col-12 col-md-10 col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <img src={image} />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <h6>David Wigfeild</h6>
                                                        <a href="#">Service Name Here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="buttons">
                                            <a href="#">Cancle Booking</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="date-time">
                                            <div className="blue py-3">
                                                <span>July 5, 2020</span>
                                                <p>3:00pm-5:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 px-0 border-bottom">
                                <div className="row main">

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="booking-details">
                                            <div className="col-12 col-md-10 col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <img src={image1} />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <h6>Sarah Young</h6>
                                                        <a href="#">Service Name Here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="buttons">
                                            <a href="#">Cancle Booking</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="date-time">
                                            <div className="blue py-3">
                                                <span>March 10, 2020</span>
                                                <p>6:00pm-9:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 px-0 border-bottom">
                                <div className="row main">

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="booking-details">
                                            <div className="col-12 col-md-10 col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <img src={image2} />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <h6>Wesley Tolls</h6>
                                                        <a href="#">Service Name Here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="buttons">
                                            <a href="#">Cancle Booking</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="date-time">
                                            <div className="blue py-3">
                                                <span>May 30, 2020</span>
                                                <p>3:00pm-6:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 px-0 border-bottom ">
                                <div className="row main">

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="booking-details">
                                            <div className="col-12 col-md-10 col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <img src={image3} />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <h6>Brad Franklin</h6>
                                                        <a href="#">Service Name Here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="buttons">
                                            <a href="#">Cancle Booking</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="date-time">
                                            <div className="blue py-3">
                                                <span>July 5, 2020</span>
                                                <p>3:00pm-5:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 px-0 border-bottom">
                                <div className="row main">

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="booking-details">
                                            <div className="col-12 col-md-10 col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <img src={image4} />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <h6>Mary Jones</h6>
                                                        <a href="#">Service Name Here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="buttons">
                                            <a href="#">Cancle Booking</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="date-time">
                                            <div className="blue py-3">
                                                <span>July 10, 2020</span>
                                                <p>9:00pm-5:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 px-0 border-bottom">
                                <div className="row main">

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="booking-details">
                                            <div className="col-12 col-md-10 col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <img src={image5} />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <h6>Chris  Svetlez</h6>
                                                        <a href="#">Service Name Here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="buttons">
                                            <a href="#">Cancle Booking</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="date-time">
                                            <div className="blue py-3">
                                                <span>July 22, 2020</span>
                                                <p>4:00pm-8:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 px-0 border-bottom ">
                                <div className="row main">

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="booking-details">
                                            <div className="col-12 col-md-10 col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <img src={image3} />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <h6>Brad Franklin</h6>
                                                        <a href="#">Service Name Here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="buttons">
                                            <a href="#">Cancle Booking</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="date-time">
                                            <div className="blue py-3">
                                                <span>July 5, 2020</span>
                                                <p>3:00pm-5:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-12 col-lg-12 px-0 ">
                                <div className="row main">

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div className="booking-details">
                                            <div className="col-12 col-md-10 col-lg-10">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <img src={image6} />
                                                    </div>

                                                    <div className="col-md-8">
                                                        <h6>Tylor Johen</h6>
                                                        <a href="#">Service Name Here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="buttons">
                                            <a href="#">Cancle Booking</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-2 col-lg-2">
                                        <div className="date-time">
                                            <div className="blue py-3">
                                                <span>May 20, 2020</span>
                                                <p>3:00pm-6:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ListUpcoming;