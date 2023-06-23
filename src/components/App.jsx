import { Component } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import styles from "./Statistics/Statistics.module.css"
export class App extends Component  {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
  }
  
  handlerFeedback = (key) => {
 this.setState((prevState) => ({ 
      [key]:prevState[key] +1
    }))
  }
       countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc,el)=>acc + el,0)
 
    };
    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const { good } = this.state;
        const sum =  total !== 0 ?  Math.round((good / total) * 100) : 0
      return sum
           
        }
  render() {
 const { good ,neutral, bad , } = this.state;
        const total = this.countTotalFeedback();
        const result = this.countPositiveFeedbackPercentage();
    return <div className={styles.wrapper}>
      <Section title="Please leave feedback" >
        <FeedbackOptions
  options={Object.keys({ good, neutral, bad })}
  onLeaveFeedback={this.handlerFeedback}
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
          :< Notification message="There is no feedback"/>}
      </Section>
      
      



    </div>
  }
 
}
