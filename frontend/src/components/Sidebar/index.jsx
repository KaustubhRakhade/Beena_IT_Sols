import styles from './Sidebar.module.css'
import Archive from './Archive'
import Categories from './Categories'

export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
        <Archive />
        <Categories />
    </div>
  )
}
