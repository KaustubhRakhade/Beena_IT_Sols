import styles from './Sidebar.module.css'
import TagChip from './TagChip'

export default function TagSelect({tagList, setTagList}) {
  return (
    <div className={styles.TagSelect}>
      {
        tagList.map((tag, index) => (
          <TagChip key={index} tag={tag} tagList={tagList} setTagList={setTagList}/>
        )
      )}
    </div>
  )
}
