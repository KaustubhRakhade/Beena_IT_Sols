import styles from './Hero.module.css'
import author from '../../assets/author.png'

export default function SliderItem() {
  return (
    <div className={styles.SliderItem}>
        <span className={styles.SlideTitle}>Make Life Easier For Ebola & Alzeimer</span>

        <div className={styles.SlideInfo}>

            <img src={author} alt="Author"/>
            <span>Jenny Kla</span>
            <div className={styles.SlideInfoDivide}></div>

            <span className="material-symbols-outlined" style={{fontSize: "1rem"}}>calendar_month</span>
            <span>02 December, 2022</span>
            <div className={styles.SlideInfoDivide}></div>

            <span className="material-symbols-outlined" style={{fontSize: "1rem"}}>schedule</span>
            <span>3 min read</span>

        </div>

        <span className={styles.SlidePreview}>Did you come here for something in particular or just general Riker-bashing? And blowing into ..... <a href='#'>read more</a></span>
    </div>
  )
}
