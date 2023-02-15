import React, { Component } from 'react';
import { ButtonsStyles, ButtonItemStyled, StatList } from './button.styled';

// import { ReactDOM } from 'react-dom';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodVoice = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralVoice = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadVoice = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <ButtonsStyles>
          <ButtonItemStyled type="button" onClick={this.handleGoodVoice}>
            Good
          </ButtonItemStyled>
          <ButtonItemStyled type="button" onClick={this.handleNeutralVoice}>
            Neutral
          </ButtonItemStyled>
          <ButtonItemStyled type="button" onClick={this.handleBadVoice}>
            Bad
          </ButtonItemStyled>
        </ButtonsStyles>
        <h2>Statistics</h2>
        <div>
          <StatList>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
          </StatList>
        </div>
      </div>
    );
  }
}

export default Counter;
