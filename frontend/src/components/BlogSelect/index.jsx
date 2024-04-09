import Pagination from './Pagination'
import BlogList from './BlogList'
import styles from './BlogSelect.module.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { BlogContext } from '../../App';

export default function BlogSelect() {

  const {
    selectedTags
  } = useContext(BlogContext);

  useEffect(() => {
    if (selectedTags.length === 0) return;
    const blogs = document.getElementById('blogs');
    blogs.scrollIntoView({behavior: 'smooth'})
  }
  , [selectedTags])

  return (
    <div className={styles.BlogSelect}>
        <div id="blogs" className={styles.scrollTargetBlogs}></div>
        <BlogList/>
        <Pagination/>
    </div>
  )
}
