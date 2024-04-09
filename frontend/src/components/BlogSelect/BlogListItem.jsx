import styles from './BlogSelect.module.css';
import author from '../../assets/author.png'
import { useContext } from 'react';
import { BlogContext } from '../../App';

export default function BlogListItem({data: blog}) {

  const {
    selectedTags, setSelectedTags,
    setCurrentPage
  } = useContext(BlogContext);
  const handleTagClick = (tag) => {
    setCurrentPage(1)
    if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((item) => item !== tag))
    } else {
        setSelectedTags([...selectedTags, tag])
    }
}

  return (
    <div className={styles.BlogListItem}>
        <img className={styles.coverImage} src={blog.coverImage} alt="Cover Image" />
        <div className={styles.BlogTags}>
            {blog.tags.map((tag, index) => (
                <span className={selectedTags.includes(tag) ? styles.activeTag : null} key={index} onClick={() => { handleTagClick(tag) }}>{tag}</span>
            ))}
        </div>

        <span className={styles.BlogTitle}>{blog.title}</span>

        <div className={styles.BlogInfo}>
            <img src={author} alt="Author:"/>
            <span>{blog.author}</span>
            <div className={styles.BlogInfoDivide}></div>

            <span className="material-symbols-outlined" style={{fontSize: "1rem"}}>calendar_month</span>
            <span>{blog.publishedDate}</span>
            <div className={styles.BlogInfoDivide}></div>

            <span className="material-symbols-outlined" style={{fontSize: "1rem"}}>schedule</span>
            <span>3 min read</span>
        </div>

        <span className={styles.BlogPreview}>{blog.preview}</span>
    </div>
  )
}
