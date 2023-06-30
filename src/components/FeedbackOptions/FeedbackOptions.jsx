
// import PropTypes from "prop-types";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
     
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </>
  );
};
// FeedbackOptions.propTypes = {
//   onLeaveFeedback:PropTypes.func,
//   option: PropTypes.shape({
//      bad:PropTypes.number,
//    neutral:PropTypes.number,
//    good:PropTypes.number,
//   })
  
// }