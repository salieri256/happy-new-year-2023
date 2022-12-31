import styles from './Rabbit.module.scss'
import rabbitImgUrl from 'assets/rabiit.svg'

const Rabbit = () => (
  <div className={styles.container}>
    <img src={rabbitImgUrl} />
  </div>
)

export default Rabbit