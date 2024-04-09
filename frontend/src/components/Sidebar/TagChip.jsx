import { useEffect } from 'react'
import styles from './Sidebar.module.css'

export default function TagChip({tag, setTagList, tagList}) {

    const [active, setActive] = useState(false)

    const handleClick = () => {
        if (tagList.includes(tag)) {
            setTagList(tagList.filter((item) => item !== tag))
        } else {
            setTagList([...tagList, tag])
        }
    }

    useEffect(() => {
        setActive(tagList.includes(tag))
    }, [tagList]);


  return (
    <div className={`${styles.TagChip} ${active ? styles.activeChip : null}`} onClick={handleClick}>
        {tag}
    </div>
  )
}
