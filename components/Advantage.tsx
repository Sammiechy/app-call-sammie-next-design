import React from 'react'
import styles from './features.module.css'; 
import Image from "next/image";
const Advantage = () => {
  return (
    <>
    <div className={styles.container}>
         <div className={styles.rightSection}>
      <h6 className={styles.feature}>ADVANTAGES</h6>
      <h1 className={styles.title}> Why choose Uifry</h1>
      <div className={styles.features}>
        <div className={styles.featureItem}>
            <div className={styles.circle}>
          <Image src="/assets/bellIcon.png" alt="Feature Icon" width={10} height={10} className={styles.icon} />
          </div>
          <div>
            <h2>Clever Notifications</h2>
            <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt
                 Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt...
                 Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt</p>
          </div>
        </div>
      
      </div>
    </div>
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
        <Image src="/assets/phone2.png" alt="Phone" width={800} height={800} className={styles.phoneImage} />
      </div>
    </div>
   
  </div>
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
        <Image src="/assets/phone2.png" alt="Phone" width={800} height={800} className={styles.phoneImage} />
      </div>
    </div>
    <div className={styles.rightSection}>
      <div className={styles.features}>
        <div className={styles.featureItem}>
            <div className={styles.circle}>
          <Image src="/assets/whitestar.png" alt="Feature Icon" width={10} height={10} className={styles.icon} />
          </div>
          <div>
          <h3 className={styles.customizetitle} >Fully Customizable</h3>
            <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
                 diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.t</p>
          </div>
        </div>
      
      </div>
    </div>
  </div>
  </>
  )
}

export default Advantage