import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Dashboard from './dashboard/Dashboard';
import Leaderboard from './leaderboard/Leaderboard';
import Login from './login/Login';
import Nav from './navigation/Navigation.js';
import NewQuestion from './new-question/NewQuestion';
import Question from './question/Question';

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
            {/* if loaded then display components */}
            {this.props.loaded ? (
              <div>
                <Nav />
                {!this.props.authedUser ? (
                  <Login />
                ) : (
                  <div>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/question/:id' component={Question} />
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, loaded }) => ({
  loaded,
  authedUser
});

export default connect(mapStateToProps)(App);
