import React from 'react'
import classes from '../styles/PlayerSection.module.css';
import Dice from './Dice.jsx';
export default function PlayerSection({children}) {
  return (
    <div className={classes.container}>
         {children}
       <Dice/> 
       
    </div>
  )
}