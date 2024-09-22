import React from 'react'
import styles from './features.module.css'; 
import Image from "next/image";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
      <div className={styles.backgroundCircle}>
      <Image
        src="/assets/circles.png"
        alt="Background Circle"
        layout="fill"
        objectFit="contain"
      />
    </div>
        <div className={styles.phoneWrapper}>
          <img src="/assets/phone2.png" alt="Phone" className={styles.phoneImage} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <h6 className={styles.feature}> FEATURES</h6>
        <h1 className={styles.title}>Uifry Premium</h1>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <img src="/assets/staricon.png" alt="Feature Icon" className={styles.icon} />
            <div>
              <h2>Budgeting Intervals</h2>
              <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt...</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <img src="/assets/rectangle.png" alt="Feature Icon" className={styles.icon} />
            <div>
              <h2>Budgeting Intervals</h2>
              <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt...</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <img src="/assets/Icon.png" alt="Feature Icon" className={styles.icon} />
            <div>
              <h2>Budgeting Intervals</h2>
              <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features