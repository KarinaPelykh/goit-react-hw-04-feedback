
// import { Statistics } from "components/Statistics/Statistics";
// import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
// export const Section = ({ good, neutral, bad, total, result,handlerFeedback }) => {
    
//     return<>
//         <FeedbackOptions
//   options={Object.keys({ good, neutral, bad })}
//   onLeaveFeedback={handlerFeedback}
// /><Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positivePercentage={result} />
//     </>
// }



export const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};