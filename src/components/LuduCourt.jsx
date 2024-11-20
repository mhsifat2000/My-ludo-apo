import React from "react";
import styles from "../styles/LuduCourt.module.css";
import Token from './Tocken.jsx'
const LudoCourt = () => {
  return (
    <div className={styles.court}>
      {/* Red Zone */}
      <div className={styles.redZone}>
           <div className={`${styles.gutiContainer}`}>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleRed}`}>
                    <Token color="red" position={{ x: 10, y: 10 }} />
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleRed}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleRed}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleRed}`}>
                </div>
           </div>
      </div>

      {/* Top Vertical Ladder */}
      <div className={styles.verticalLadder}>
        {Array(18)
          .fill(null)
          .map((_, i) => (
            <div
              key={`top-ladder-${i}`}
              className={`${styles.cell} ${i == 4 ||i ==5 || i==7 || i==10 || i==13 || i==16 ? styles.greenCell : ""} ${i==3 ? styles.star:""}`}
            ></div>
          ))}
      </div>

      {/* Green Zone */}
      <div className={styles.greenZone}>
           <div className={`${styles.gutiContainer}`}>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleGreen}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleGreen}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleGreen}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleGreen}`}>
                </div>
           </div>
      </div>

      {/* Left Horizontal Ladder */}
      <div className={styles.horizontalLadder}>
        {Array(18)
          .fill(null)
          .map((_, i) => (
            <div
              key={`left-ladder-${i}`}
              className={`${styles.cell} ${i == 7 ||i ==8|| i==9 || i==10 || i==1 || i==11 ? styles.redCell : ""} ${i==13 ? styles.star:""}`}
            ></div>
          ))}
      </div>

      {/* Home Center */}
      <div className={styles.home}>
        <div className={styles.triangleRed}></div>
        <div className={styles.triangleGreen}></div>
        <div className={styles.triangleBlue}></div>
        <div className={styles.triangleYellow}></div>
      </div>

      {/* Right Horizontal Ladder */}
      <div className={styles.horizontalLadder}>
        {Array(18)
          .fill(null)
          .map((_, i) => (
            <div
              key={`right-ladder-${i}`}
              className={`${styles.cell} ${i == 7 ||i ==8|| i==9 || i==10 || i==6 || i==16 ? styles.yellowCell : ""} ${i==4 ? styles.star:""}`}
            ></div>
          ))}
      </div>

      {/* Blue Zone */}
      <div className={styles.blueZone}>
           <div className={`${styles.gutiContainer}`}>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleBlue}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleBlue}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleBlue}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleBlue}`}>
                </div>
           </div>
      </div>

      {/* Bottom Vertical Ladder */}
      <div className={styles.verticalLadder}>
        {Array(18)
          .fill(null)
          .map((_, i) => (
            <div
              key={`bottom-ladder-${i}`}
              className={`${styles.cell} ${i == 4 ||i ==1 || i==7 || i==10 || i==13 || i==12 ? styles.blueCell : ""} ${i==14 ? styles.star:""}`}
            ></div>
          ))}
      </div>

      {/* Yellow Zone */}
      <div className={styles.yellowZone}>
           <div className={`${styles.gutiContainer}`}>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleYellow}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleYellow}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleYellow}`}>
                </div>
                <div className={`${styles.gutiCircle} ${styles.gutiCircleYellow}`}>
                </div>
           </div>
      </div>
    </div>
  );
};

export default LudoCourt;
