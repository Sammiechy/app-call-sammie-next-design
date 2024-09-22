// components/Header.js
import React from 'react';
import Link from 'next/link';
import styles from './header.module.css'; 
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logo}>
        <Image
  src="/assets/vector.png" 
  alt="Logo" 
  width={40} 
  height={40} 
  className={styles.logoImage} 
/>
          <span className={styles.brandName}>uifry</span>
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">About Us</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/features">Features</Link>
            </li>
          </ul>
        </nav>

        {/* Download Button */}
        <div className={styles.downloadButtonContainer}>
          <button className={styles.downloadButton}>Download</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
