import Pagination from './Pagination'
import BlogList from './BlogList'
import { getBlogs } from "../../API"
import { useState, useEffect, useContext } from 'react'
import styles from './BlogSelect.module.css';
import { BlogContext } from '../../App';

export default function BlogSelect() {

  const {
    blogData, setBlogData,
    totalPages, setTotalPages,
    currentPage, setCurrentPage
  } = useContext(BlogContext);

  useEffect(() => {
    const temp = getBlogs();
    setBlogData(temp)
    setTotalPages(1 + Math.floor((temp.length-1) / 6))
  }, []);

  return (
    <div className={styles.BlogSelect}>
        <BlogList/>
        <Pagination/>
    </div>
  )
}
