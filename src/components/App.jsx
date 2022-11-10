import React from 'react';
import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (event) => {
    const option = event.target.className;
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = () => { 
    return (Math.round((good / countTotalFeedback()) * 100));
  }
  
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
    
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ?
          <Notification message="There is no feedback..." /> :
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