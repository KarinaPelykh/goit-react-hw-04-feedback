import PropTypes from "prop-types";

export const Statistics = ({ total, bad, neutral, good, positivePercentage }) => {
   console.log(total);
   return  <>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage}%</p>
   </>
}
Statistics.propTypes = {
   total:PropTypes.number,
   bad:PropTypes.number,
   neutral:PropTypes.number,
   good:PropTypes.number,
   positivePercentage:PropTypes.number
}
