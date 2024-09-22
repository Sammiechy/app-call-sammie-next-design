import React from 'react';
import styles from './faq.module.css';
import Image from "next/image";
const FaqSections = () => {
  return (<>
    <div className={styles.faqContainer}>
        <h1 style={{fontSize:"20px",color:"#FF5555"}}>FAQ</h1>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.faqGrid}>
        <div className={styles.faqCardRed}>
          <h2>The Best Financial Accounting App Ever!</h2>
          <p>
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.”
          </p>
        </div>
        <div className={styles.faqCard}>
          <h2>The Best Financial Accounting App Ever!</h2>
          <p>
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.”
          </p>
        </div>
        <div className={styles.faqCard}>
          <h2>The Best Financial Accounting App Ever!</h2>
          <p>
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.”
          </p>
        </div>
        <div className={styles.faqCardRed}>
          <h2>The Best Financial Accounting App Ever!</h2>
          <p>
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.”
          </p>
        </div>
        <div className={styles.faqCardRed}>
          <h2>The Best Financial Accounting App Ever!</h2>
          <p>
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.”
          </p>
        </div>
        <div className={styles.faqCard}>
          <h2>The Best Financial Accounting App Ever!</h2>
          <p>
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris.”
          </p>
        </div>
      </div>
    </div>
    <div className={styles.ImageContainer}>
        <Image src="/assets/Frame.png" alt="Frame" height={300} width={1270}/>
    </div>
    </>

  );
};

export default FaqSections;
