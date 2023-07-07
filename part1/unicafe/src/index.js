import React, { useState } from 'react';
import {createRoot} from "react-dom/client";




const Button = ({onClick, text}) => (
  <button onClick={onClick}>
   {text}
   </button>
)

const StatisticsLine = (props) => {
  const statis = [props.good,props.bad,props.neutral, props.all, props.tempaverage, props.comPositiv]
  return(
          <tr>
          <td>
             {props.text}
            </td>
          <td>
             {statis[props.ind]}
            </td>
          </tr> 
  )


}

const Statistics = (props) => {
  const all = props.good+props.bad+props.neutral
  let tempaverage = 0
  let comPositiv = 0
  tempaverage = props.good - props.bad
  if(tempaverage === 0){
    tempaverage = 0
  }else {
    tempaverage = tempaverage/all
  }
  if(all !==0){
    comPositiv = (props.good*100)/all
  }else{
    comPositiv = 0;
  }
  if (all === 0){
    return (
      <div>
        <h1>Statistics</h1>
        No Feedback Given
      </div>
    )
  }
  return(
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <StatisticsLine text = 'Good' good = {props.good} ind = {0} />
        <StatisticsLine text = 'Neutral' neutral = {props.neutral} ind = {2} />
        <StatisticsLine text = 'Bad' bad = {props.bad} ind = {1} />
        <StatisticsLine text = 'All' all = {all} ind = {3} />
        <StatisticsLine text = 'Average' tempaverage = {tempaverage} ind = {4} />
        <StatisticsLine text = 'Positive' comPositiv = {comPositiv + ' %'} ind = {5} />
        </tbody>
      </table>
      
    </div>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>      
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
