import React from 'react'
import LuduCourt from '../LuduCourt.jsx'
import classes from '../../styles/GamePage.module.css';
import PlayerSection from '../PlayerSectiom.jsx'
export default function GamePage() {
  return (
    <div className ={classes.container}>
        <div className={classes.playerContainer}>
             
        <PlayerSection>
              <p>
                  player 1
              </p>
         </PlayerSection>
         <PlayerSection>
              <p>
                   player2
              </p>
         </PlayerSection>
       </div> 
         <LuduCourt/>
         <div className={classes.playerContainer}>
         <PlayerSection>
              <p>
                   player3
              </p>
         </PlayerSection>
         <PlayerSection>
              <p>
                   player4
              </p>
         </PlayerSection>
         </div>
    </div>
  )
}