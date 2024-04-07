import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.png'
import { useState } from 'react'

export default function Navbar() {

  const [Hamstate, setHamstate] = useState(true);
  return (

    <div className={styles.NavbarContainer}>
      <div className={styles.Navbar}>

          <input
            type='button'
            className={"material-symbols-outlined " + styles.Hamburger}
            onFocus={() => {setTimeout(() => { setHamstate(false) }, 200) }}
            onBlur={() => {setTimeout(() => { setHamstate(true) }, 200) }}
            value={Hamstate ? "menu" : "arrow_back"}
          />

          <img src={logo} className={styles.logo} alt="Al Ghilani Foundation" />

          <div className={styles.NavLinks}>
              <a href='#'>Campaign</a>
              <a href='#'>Donate</a>
              <a href='#'>Activities</a>
              <a href='#'>Become a volunteer</a>
              <a href='#'>Contact us</a>
              <input
                  type="button"
                  className={styles.DonateButton1}
                  value="Donate Now"
              />
          </div>

          <input
              type="button"
              className={styles.DonateButton2}
              value="Donate Now"
          />
      </div>
    </div>
  )
}
