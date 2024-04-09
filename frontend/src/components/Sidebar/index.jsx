import styles from './Sidebar.module.css'
import Archive from './Archive'
import Categories from './Categories'
import VisitorStats from './VisitorStats'
import TagSelect from './TagSelect'
import Socials from './Socials'

export default function Sidebar() {

  return (
    <div className={styles.Sidebar}>
        <Archive />
        {/* <TagSelect/> */}
    </div>
  )
}
