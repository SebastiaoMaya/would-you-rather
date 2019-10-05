import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from 'reactstrap';
import * as Constants from '../../utils/constants';
import { alreadyVoted } from '../../utils/helpers';
import Question from '../question/Question';

class Dashboard extends Component {
  state = {
    activeTab: Constants.UNANSWERED_QUESTIONS
  };

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { unanswered_questions_ids, answered_questions_ids } = this.props;

    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className='tab-pointer'
              active={this.state.activeTab === Constants.UNANSWERED_QUESTIONS}
              onClick={() => {
                this.toggle(Constants.UNANSWERED_QUESTIONS);
              }}
            >
              {Constants.UNANSWERED_QUESTIONS}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className='tab-pointer'
              active={this.state.activeTab === Constants.ANSWERED_QUESTIONS}
              onClick={() => {
                this.toggle(Constants.ANSWERED_QUESTIONS);
              }}
            >
              {Constants.ANSWERED_QUESTIONS}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId={Constants.UNANSWERED_QUESTIONS}>
            {unanswered_questions_ids.map(id => (
              <Row key={id}>
                <Col sm='6'>
                  <Question
                    id={id}
                    questionType={Constants.SIMPLIFIED_QUESTION_TYPE}
                  />
                </Col>
              </Row>
            ))}
          </TabPane>
          <TabPane tabId={Constants.ANSWERED_QUESTIONS}>
            {answered_questions_ids.map(id => (
              <Row key={id}>
                <Col sm='6'>
                  <Question
                    id={id}
                    questionType={Constants.SIMPLIFIED_QUESTION_TYPE}
                  />
                </Col>
              </Row>
            ))}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  const unanswered_questions_ids = Object.keys(questions)
    .filter(key => !alreadyVoted(questions, key, authedUser))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const answered_questions_ids = Object.keys(questions)
    .filter(key => alreadyVoted(questions, key, authedUser))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    unanswered_questions_ids,
    answered_questions_ids
  };
};

export default connect(mapStateToProps)(Dashboard);
