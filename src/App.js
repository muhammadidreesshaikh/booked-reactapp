import React from 'react';
import './App.css';

import Header from './layout/Header';
import AppHeader from './layout/AppHeader';
// import Footer from './layout/Footer';
import Booking from './components/Booking/Booking';
import BookingList from './components/Booking/BookingList';
import Calendar from './components/Booking/Calendar';


import {
  HashRouter as Router,
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
                <Route exact path={process.env.PUBLIC_URL + '/booked-react-app'}>
                  <Redirect to={process.env.PUBLIC_URL + '/booking'} />
                </Route>
  
                <Route exact path="/">
                  <Redirect to={process.env.PUBLIC_URL + '/booking'} />
                </Route>

                <Route exact path={process.env.PUBLIC_URL + '/booking'} component={Booking}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/calendar'} component={Calendar}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/booking-listing'} component={BookingList}></Route>
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
