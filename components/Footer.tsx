import React from 'react';
import styles from './Footer.module.css'; 
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
       
        <div className={styles.companyInfo}>
        
          <h1 className={styles.logo}> <Image src="/assets/vector.png" width={10} height={10} alt="Feature Icon" className={styles.icon} />uifry</h1>
          <div style={{display:"flex" ,padding:"10px"}} > <Image src="/assets/messageIcon.png" width={10} height={10} alt="Feature Icon" style={{paddingRight:"10px" }} /> <p style={{flex:1}}>Help@Frybix.Com</p></div>
          <div style={{display:"flex",padding:"10px"}}><Image src="/assets/phoneIcon.png" width={10} height={10} alt="Feature Icon" style={{paddingRight:"10px"}} /> <p>+1234 456 678 89</p></div>
        </div>

       
        <div className={styles.links}>
          <h2  className={styles.h2tag}>Links</h2>
          <ul className={styles.ultag}>
            <li className={styles.litag}>Home</li>
            <li className={styles.litag}>About Us</li>
            <li className={styles.litag}>Bookings</li>
            <li className={styles.litag}>Blog</li>
          </ul>
        </div>

      
        <div className={styles.legal}>
          <h2 className={styles.h2tag}>Legal</h2>
          <ul className={styles.ultag}>
            <li className={styles.litag}>Terms Of Use</li>
            <li className={styles.litag}>Privacy Policy</li>
            <li className={styles.litag}>Cookie Policy</li>
          </ul>
        </div>

        <div className={styles.product}>
          <h2 className={styles.h2tag}>Product</h2>
          <ul className={styles.ultag}>
            <li className={styles.litag}>Take Tour</li>
            <li className={styles.litag}>Live Chat</li>
            <li className={styles.litag}>Reviews</li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h2 className={styles.h2tag}>Newsletter</h2>
          <p>Stay Up To Date</p>
          <form className={styles.form}>
            <input type="email" placeholder="Your email" className={styles.input} />
            <button type="submit" className={styles.button}>Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Copyright © 2022 Uifry.Com All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
