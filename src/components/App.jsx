import {  useState } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import styles from "./Statistics/Statistics.module.css"
export const App = () => {
//    state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//   }
  
//   handlerFeedback = (key) => {
//  this.setState((prevState) => ({ 
//       [key]:prevState[key] +1
//     }))
//   }
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

  const handlerFeedback = (key) => {
    if (key === 'good') {
      setGood(prev => (prev + 1))
    } else if (key === 'neutral') {
      setNeutral(prev => ( prev + 1))
    } else if (key === 'bad') {
      setBad(prev => (prev + 1))
    }
  }
    const countTotalFeedback = () => {
      // return Object.values(state).reduce((acc, el) => acc + el, 0)
 return good + neutral + bad
    };
    const countPositiveFeedbackPercentage = () => {
      // const total =countTotalFeedback();
      // const { good } = setGood
      const sum = total !== 0 ? Math.round((good / total) * 100) : 0
      return sum
           
    }
 
    // const { good, neutral, bad, }
    const total =countTotalFeedback();
    const result = countPositiveFeedbackPercentage();
    return <div className={styles.wrapper}>
      <Section title="Please leave feedback" >
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handlerFeedback}
        />
      </Section >
      <Section title="Statistics" >
        {total !== 0 ?
          <Statistics
       
            good={good}
           
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={result}
          />
          : < Notification message="There is no feedback" />}
      </Section>
      
      



    </div>
  }
 

