// import { Component } from 'react';

// export class Counter extends Component {
  
// state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     handlerGood = () => {
//      this.setState(prevState =>({ good: prevState.good + 1 }))
//     };

//     handlerNeutral = () => {
//         this.setState(prevState => ({neutral: prevState.neutral + 1}));
//     };   

//     handlerBad = () => {
//         this.setState(prevState=>({bad: prevState.bad + 1}))
//     };
    
//     countTotalFeedback = () => {
//         return Object.values(this.state).reduce((acc,el)=>acc + el,0)
 
//     };
   
//     countPositiveFeedbackPercentage = () => {
//         const total = this.countTotalFeedback();
//         const { good } = this.state;
//         const sum =  total !== 0 ?  Math.round((good / total) * 100) : 0
//       return sum
           
//         }
       
//     render() {
//         const { good ,neutral, bad , } = this.state;
//         const total = this.countTotalFeedback();
//         const result = this.countPositiveFeedbackPercentage();

        
//         return  <>
//                 <h1>Please leave feedback</h1>
//                 <button onClick={ this.handlerGood}> Good</button>
//                 <button  onClick={ this.handlerNeutral}> Neutral</button>
//                 <button onClick={ this.handlerBad} >Bad</button>
//             <h2>Statistics</h2>
//                 <p>Good:{good}</p>
//                 <p>Neutral:{neutral}</p>
//                 <p>Bad:{bad}</p>
//                 <p>Total:{total}</p>
//             <p>Positive feedback:{result}%</p>
//             </>
//     }    

// }

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