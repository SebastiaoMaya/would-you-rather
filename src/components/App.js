import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Homepage from './homepage/Homepage';
import Leaderboard from './leaderboard/Leaderboard';
import Nav from './navigation/Navigation.js';
import NewQuestion from './new-question/NewQuestion';
import PageNotFound from './pagenotfound/PageNotFound';
import QuestionPage from './question/QuestionPage';

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
                <Switch>
                  <Route path='/' exact component={Homepage} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/question/:id' component={QuestionPage} />
                  <Route path='*' component={PageNotFound} />
                </Switch>
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
