import React from 'react';
import Image from "next/image";
import styles from './header.module.css'; 
import PhoneSection from './PhoneSection';
import AfterPhoneSection from './AfterPhoneSection';


const SecondPart = () => {
  return (<>
    <section className={styles.hero} >
    <div className={styles.content}>
      <h1 className={styles.title}>Make The Best Financial Decisions</h1>
      <p className={styles.subtitle}>
        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus
        Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
      </p>
      <div className={styles.buttons}>
        <button className={styles.getStarted}>Get Started</button>
        <button className={styles.watchVideo}>
          <Image src='/assets/videoicon.png' className={styles.icon} alt='play video' height={10} width={10}/> Watch Video
        </button>
      </div>
      <div  className={styles.afterphone}  >
        <div >
    <Image alt='star' width={150} height={60} src={'/assets/Star 8.png'} style={{marginLeft:"20%"}}/>
    <AfterPhoneSection/>
    </div>
    </div>
    </div>
        <PhoneSection/>
        <div > 

      </div>
    </section>
  
    </>
  )
}

export default SecondPart