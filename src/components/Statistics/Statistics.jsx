import propTypes from 'prop-types';
import { FeedbackItem, FeedbackList } from './Statistic.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <FeedbackList>
      <FeedbackItem>Good:{good}</FeedbackItem>
      <FeedbackItem>Neutral:{neutral}</FeedbackItem>
      <FeedbackItem>Bad:{bad}</FeedbackItem>
      <FeedbackItem>Total:{total}</FeedbackItem>
      <FeedbackItem>PositivePercentage:{positivePercentage}%</FeedbackItem>
    </FeedbackList>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
