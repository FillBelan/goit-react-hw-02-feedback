import React from 'react';
import { ButtonItemStyled } from '../Counter/button.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <ButtonItemStyled
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </ButtonItemStyled>
      ))}
    </>
  );
};

export default FeedbackOptions;
