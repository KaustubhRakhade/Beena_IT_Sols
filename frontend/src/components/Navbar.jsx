import styles from '../styles/Navbar.module.css'
import logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.Navbar}>
          <img src={logo} className={styles.logo} alt="Al Ghilani Foundation" />

          <div className={styles.NavLinks}>
              <a href='#'>Campaign</a>
              <a href='#'>Donate</a>
              <a href='#'>Activities</a>
              <a href='#'>Become a volunteer</a>
              <a href='#'>Contact us</a>
          </div>

          <input
              type="button"
              className={styles.DonateButton}
              value="Donate Now"
          />
      </div>
    </div>
  )
}
