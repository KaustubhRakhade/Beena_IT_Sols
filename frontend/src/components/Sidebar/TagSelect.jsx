import styles from './Sidebar.module.css'
import TagChip from './TagChip'
import { BlogContext } from '../../App';
import { useContext } from 'react';

export default function TagSelect() {

  const {
    tagList, setTagList
  } = useContext(BlogContext);

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
