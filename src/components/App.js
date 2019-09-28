import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import Nav from './navigation/Navigation.js';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true ? (
              <Login />
            ) : (
              <div>
                <Route path='/' exact component={Dashboard} />
                {/* <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' component={NewTweet} /> */}
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default connect(mapStateToProps)(App);
