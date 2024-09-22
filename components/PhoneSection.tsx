import React from 'react'
import styles from './phonesection.module.css'; 
import Image from "next/image";

const PhoneSection = () => {
  return (
    <div className={styles.container}>
    {/* Background Circle */}
    <div className={styles.backgroundCircle}>
      <Image
        src="/assets/circles.png"
        alt="Background Circle"
        layout="fill"
        objectFit="contain"
      />
    </div>
    
    {/* Phones */}
    <div className={styles.phones}>
      <Image
        src="/assets/phone2.png"
        alt="Phone1"
        width={350}
        height={600}
        className={styles.phone1}
      />
      <Image
          src="/assets/phone2.png"
          alt="Phone2"
          width={250}
          height={700}
          className={styles.phone2}
        />
        <Image
          src="/assets/phone3.png"
          alt="Phone3"
          width={200}
          height={700}
          className={styles.phone3}
        />
      </div>
      
      </div>

  )
}

export default PhoneSection;