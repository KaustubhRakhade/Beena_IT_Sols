import BlogListItem from './BlogListItem'
import styles from './BlogSelect.module.css';
import { BlogContext } from '../../App';
import { useContext, useEffect, useState } from 'react';

export default function BlogList() {

  const {
    blogData,
    currentPage, setCurrentPage,
    selectedTags,
    totalPages, setTotalPages
  } = useContext(BlogContext);

  const [blogsToShow, setBlogsToShow] = useState([]);

  useEffect(() => {
    const temp = blogData.filter(blog => {
      if (selectedTags.length === 0) {
        return true
      } else {

        let found = false;
        selectedTags.forEach(tag => {
          if (blog.tags.includes(tag)) {
            found = true;
          }
        })

        return found;
      }
    })

    setTotalPages(1 + Math.floor((temp.length-1) / 6))

    const start = (currentPage - 1) * 6;
    const end = start + 6;

    setBlogsToShow(temp.slice(start, end))
  }, [currentPage, blogData, selectedTags])

  return (
    <div className={styles.BlogList}>
        {blogsToShow.map((blog, index) => (
            <BlogListItem key={index} data={blog}/>
        ))}
    </div>
  )
}
