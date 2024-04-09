import BlogListItem from './BlogListItem'
import styles from './BlogSelect.module.css';
import { BlogContext } from '../../App';
import { useContext } from 'react';

export default function BlogList() {

  const {
    blogData,
    currentPage,
  } = useContext(BlogContext);

  return (
    <div className={styles.BlogList}>
        {blogData.map((blog, index) => (
            (Math.floor(index/6) === currentPage-1)
              ? <BlogListItem key={index} data={blog}/>
              : null
        ))}
    </div>
  )
}
