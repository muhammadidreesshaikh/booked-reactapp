import React from 'react';
import './App.css';

import Header from './layout/Header';
import AppHeader from './layout/AppHeader';
// import Footer from './layout/Footer';
import Booking from './components/Booking/Booking';
import BookingList from './components/Booking/BookingList';
import Calendar from './components/Booking/Calendar';
import BookingDetails from './components/Booking/SideModal/BookingDetails';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { connect } from "react-redux";

import {
  GetUsers
} from "./redux/actions/taskAction";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.GetUsers();
  }

  render() {
    console.log("this.props.tasksss ", this.props.Loading);

    return (
      <Router>
        <div className="App">
          <Header />

          {/* all components */}
          <div className="container">
            <div className="main-container">
              <AppHeader />

              <Switch>
                <Route exact path={'/'} component={Booking}></Route>
                <Route exact path={'/booking'} component={Booking}></Route>
                <Route exact path={'/calendar'} component={Calendar}></Route>
                <Route exact path={'/booking-listing'} component={BookingList}></Route>
                <Route exact path={'/booking-details'} component={BookingDetails}></Route>
              </Switch>
            </div>
          </div>

          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  Loading: state.task.loading
});

const mapDispacthToProps = dispatch => {
  return {
    GetUsers: () => dispatch(GetUsers())
  };

};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(App);
