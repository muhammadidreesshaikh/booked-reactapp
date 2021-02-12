import React from 'react';
import './App.css';

import Header from './layout/Header';
// import Footer from './layout/Footer';
import Home from './components/Home';
import Booking from './components/Booking/Booking';
import Calendar from './components/Booking/Calendar';
import ListPanding from './components/Booking/ListPanding';
import ListToday from './components/Booking/ListToday';
import ListUpcoming from './components/Booking/ListUpcoming';
import ListCompleted from './components/Booking/ListCompleted';


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
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/react-boilerplate'}>
                  <Redirect to={process.env.PUBLIC_URL + '/login'} />
                </Route>
  
                <Route exact path="/">
                  <Redirect to={process.env.PUBLIC_URL + '/login'} />
                </Route>
  
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/home'} component={Home}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/booking'} component={Booking}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/calendar'} component={Calendar}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/listpanding'} component={ListPanding}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/listtoday'} component={ListToday}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/listupcoming'} component={ListUpcoming}></Route>
                <Route exact path={process.env.PUBLIC_URL + '/listcompleted'} component={ListCompleted}></Route>
              </Switch>
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
