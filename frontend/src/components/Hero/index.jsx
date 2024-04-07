import styles from './Hero.module.css'
import Carousel from './Carousel'
import Popular from './Popular'

export default function Hero() {
  return (
    <div className={styles.Hero}>
        <div className={styles.Featured}>
            <span>Featured</span>
            <Carousel/>
        </div>
        <Popular/>
    </div>
  )
}
