import { useEffect, useState, useContext } from 'react'
import styles from './Sidebar.module.css'
import { BlogContext } from '../../App';

export default function TagChip({tag}) {

    const {
        selectedTags, setSelectedTags,
        setCurrentPage
    } = useContext(BlogContext);

    const handleClick = () => {
        setCurrentPage(1)
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((item) => item !== tag))
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }


  return (
    <div
        className={`${styles.TagChip} ${selectedTags.includes(tag) ? styles.activeChip : null}`}
        onClick={handleClick}>
        {tag}
    </div>
  )
}
