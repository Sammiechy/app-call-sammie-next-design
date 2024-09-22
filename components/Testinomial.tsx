import React from 'react'
import Image from 'next/image';
import styles from './testinomial.module.css'; 

    
    const Testinomial = () => {
      return (
        <div className={styles.container}>
          {/* Left Section with User Images */}
          <div className={styles.testimonialContainer}>
            <div className={styles.gradientBackground}></div>
            <h3 className={styles.title}>TESTIMONIAL</h3>
            <h1 className={styles.heading}>What Our Users <br></br>
            Say About Us?</h1>
        </div>
        <div style={{ display:"flex", justifyContent: "space-between",alignItems:"center"}}>
        <div className={styles.orbitcontainer}>
        <div className={styles.orbitBackground}>
        <Image 
             src="/assets/circles.png" 
          alt="Orbit Background" 
          layout="fill"
          objectFit="cover" 
        />
           
        </div>
        <div className={styles.centerUser}>
        <Image 
          src="/assets/CentreImage.png" 
          alt="Center User" 
          width={100} 
          height={100}
          className={styles.userImage}
        />
        <div className={styles.quote}>
          <span>“</span>
        </div>
      </div>

      <div className={`${styles.orbitUser} ${styles.user1}`}>
        <Image 
         src="/assets/Ellipse 42.png"
          alt="User 1" 
          width={60} 
          height={60}
          className={styles.userImage}
        />
      </div>

      <div className={`${styles.orbitUser} ${styles.user2}`}>
        <Image 
           src="/assets/Ellipse 43.png"
          alt="User 2" 
          width={60} 
          height={60}
          className={styles.userImage}
        />
      </div>

      <div className={`${styles.orbitUser} ${styles.user3}`}>
        <Image 
           src="/assets/Ellipse 44.png"
          alt="User 3" 
          width={60} 
          height={60}
          className={styles.userImage}
        />
      </div>
      <div className={`${styles.orbitUser} ${styles.user4}`}>
        <Image 
          src="/assets/Ellipse 45.png"
          alt="User 4" 
          width={60} 
          height={60}
          className={styles.userImage}
        />
      </div>
      
    </div>
    <div className={styles.leftcontainer}>
      <h2 className={styles.titles}>The Best Financial Accounting App Ever!</h2>
      <p className={styles.description}>
        “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio.
        Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu.
        Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”
      </p>
      <div className={styles.avatars}>
        <div className={styles.avatar}>
          <Image 
            src="/assets/Ellipse 42.png"
            alt="Avatar 1" 
            width={50} 
            height={50}
            className={styles.image}
          />
        </div>
        <div className={styles.avatar}>
        <Image 
           src="/assets/Ellipse 42.png"
            alt="Avatar 2" 
            width={50} 
            height={50}
            className={styles.image}
          />
        </div>
        <div className={styles.avatar}>
          <Image 
            src="/assets/Ellipse 42.png"
            alt="Avatar 3" 
            width={50} 
            height={50}
            className={styles.image}
          />
        </div>
        <div className={styles.avatar}>
        <Image 
           src="/assets/Ellipse 42.png"
            alt="Avatar 4" 
            width={50} 
            height={50}
            className={styles.image}
          />
        </div>
        <div className={styles.avatar}>
          <Image 
           src="/assets/Ellipse 42.png" 
            alt="Avatar 5" 
            width={50} 
            height={50}
            className={styles.image}
          />
        </div>
      </div>
      <p className={styles.name}>Nick Jonas</p>
    </div>
    </div>
        </div>
      );
    };
    
    export default Testinomial;
    