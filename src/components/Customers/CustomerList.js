import React, {useState} from 'react';
import '../../assets/css/customer-list.css';
import CustomerDetails from './SideModal/CustomerDetails';

function CustomerList () {

    const [side, SideToggle] = useState(false);
    const [data, setData] = useState(
        [
            {
                id: 0,
                image: 'https://www.urbanpedaltours.com/wp-content/uploads/2019/04/team.png',
                name: "Brad Franklin",
                email: "brandfranklin@email.com",
                number: "14"
            },
            {
                id: 1,
                image: 'https://www.urbanpedaltours.com/wp-content/uploads/2019/04/team.png',
                name: "Lucas Greg",
                email: "lucasgreg@email.com",
                number: "3"
            },
            {
                id: 2,
                image: 'https://www.urbanpedaltours.com/wp-content/uploads/2019/04/team.png',
                name: "Wesley Tolls",
                email: "wesleytolls@email.com",
                number: "24"
            },
            {
                id: 3,
                image: 'https://www.urbanpedaltours.com/wp-content/uploads/2019/04/team.png',
                name: "David wigfeild",
                email: "davidwighfeild@email.com",
                number: "15"
            },
            {
                id: 4,
                image: 'https://www.urbanpedaltours.com/wp-content/uploads/2019/04/team.png',
                name: "Sarah Young",
                email: "sarahyoung@email.com",
                number: "12"
            },
            {
                id: 4,
                image: 'https://www.urbanpedaltours.com/wp-content/uploads/2019/04/team.png',
                name: "John Semth",
                email: "johnsemth@email.com",
                number: "2"
            }
        ]
    );

    return (
        <div>
            <div className="customer-list">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="row bar">
                                <div className="col-6 col-md-6 col-lg-6">
                                    <h5 className="float-left">CUSTOMER NAME</h5>
                                </div>

                                <div className="col-6 col-md-6 col-lg-6">
                                    <h5 className="float-right">BOOKINGS</h5>
                                </div>
                            </div>
                        </div>

                        {
                            data.map((item, index) => {
                                return (
                                    <div className="col-12 col-md-12 col-lg-12 px-0 border-bottom">
                                        <div className="row main">

                                            <div className="col-12 col-md-4 col-lg-4">
                                                <div className="booking-details">
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <img src={item.image} />
                                                        </div>

                                                        <div className="col-md-7">
                                                            <h6 onClick={() => SideToggle(!side) }>{item.name}</h6>
                                                            <p href="#">{item.email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-8 col-lg-8">
                                                <div className="numbers">
                                                    <h5>{item.number}</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12">
                <div className={side == true ? "side open" : "side"}>
                    <div className="close-btn">
                        <a onClick={() => SideToggle(!side) }><i class="fas fa-times"></i></a>
                    </div>

                    <CustomerDetails />
                </div>
            </div>
        </div>
    );
}
export default CustomerList;