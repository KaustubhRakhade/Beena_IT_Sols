import BlogListItem from './BlogListItem'
import styles from './BlogSelect.module.css';

export default function BlogList({blogs, currentPage}) {

  return (
    <div className={styles.BlogList}>
        {blogs.map((blog, index) => (
            (Math.floor(index/6) === currentPage-1)
              ? <BlogListItem key={index} data={blog}/>
              : <></>
        ))}
    </div>
  )
}
