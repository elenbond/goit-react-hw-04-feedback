import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    return (Number(this.state.good + this.state.neutral + this.state.bad));
  }
  
  countPositiveFeedbackPercentage = () => { 
    return (Math.round((this.state.good / this.countTotalFeedback()) * 100));
  }

  onLeaveFeedback = (event) => {
    const option = event.target.className;
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? <Notification message="There is no feedback" /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage} />}
        </Section>
      </>
    )
  }
}