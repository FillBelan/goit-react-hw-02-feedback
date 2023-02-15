import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <>
          <li>Good: {good} </li>
          <li> Neutral: {neutral} </li>
          <li>Bad: {bad} </li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </>
      )}
    </>
  );
};

export default Statistics;
