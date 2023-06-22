export const Statistics = ({total, bad,neutral,good, positivePercentage}) => {
   return  <>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage}%</p>
   </>
}

