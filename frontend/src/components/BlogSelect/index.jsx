import Pagination from './Pagination'
import BlogList from './BlogList'
import { getBlogs } from "../../API"
import { useState, useEffect } from 'react'
import styles from './BlogSelect.module.css';

export default function BlogSelect() {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const temp = getBlogs();
    setBlogs(temp)
    setTotalPages(1 + Math.floor((temp.length-1) / 6))
  }, []);

  return (
    <div className={styles.BlogSelect}>
        <BlogList currentPage={currentPage} blogs={blogs}/>
        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}
