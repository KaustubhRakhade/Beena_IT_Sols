import Sidebar from "./Sidebar";
import BlogSelect from "./BlogSelect";
import styles from '../styles/Content.module.css'

export default function Content() {
  return (
    <div className={styles.Content}>
        <BlogSelect/>
        <Sidebar/>
    </div>
  )
}
