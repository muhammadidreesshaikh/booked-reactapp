import React, { useState } from 'react';
import '../assets/css/footer.css';

function Footer() {

    const [itemToggle, setItemToggle] = useState('');

    const openAccordian = (item) => {
        if (item == itemToggle) {
            setItemToggle('');
        }
        else {
            setItemToggle(item);
        }
    }

    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="first">
                                <h3>Booked App</h3>
                                <p className="pt-2">Established too long ago that a reader will be distracted by the text content of a site while looking at its design. The point of using that has a less normal distribution of the letters contrary to using texts such as.</p>

                                <div className="pt-4">
                                    <a className="press" href="#">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="first">
                                <h3>
                                    <span>COMPANY</span>
                                    <a onClick={() => openAccordian('company')}>
                                        {
                                            itemToggle == 'company' ?
                                            <i class="fas fa-chevron-up"></i>
                                            :
                                            <i class="fas fa-chevron-down"></i>
                                        }
                                    </a>
                                </h3>
                                <ul className={"" + (itemToggle == 'company' ? 'open' : '')}>
                                    <li><a href="#">Our History</a></li>
                                    <li><a href="#"> Investor Relations & Policies</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Gift Cards</a></li>
                                    <li><a href="#">Sale 30%</a></li>
                                    <li><a href="#">Merchandise Store</a></li>
                                </ul>
                            </div>
                        </div> 

                        <div className="col-md-3">
                            <div className="first">
                                <h3>
                                    <span>STAY CONNECTED</span>
                                    <a onClick={() => openAccordian('stay-connected')}>
                                        {
                                            itemToggle == 'stay-connected' ?
                                            <i class="fas fa-chevron-up"></i>
                                            :
                                            <i class="fas fa-chevron-down"></i>
                                        }
                                    </a>
                                </h3>
                                <ul className={"" + (itemToggle == 'stay-connected' ? 'open' : '')}>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Messenger</a></li>
                                    <li><a href="#">Our App</a></li>
                                    <li><a href="#">111-235-0101</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="seprator"></div>

                        <div className="col-md-12">
                            <div className="last pt-4">
                                <p>© Copyright 2021, Booked App. All Rights Reserved.</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;