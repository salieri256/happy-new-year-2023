import Footer from "components/Footer/Footer";
import Rabbit from "components/Rabbit/Rabbit";
import Wave from "components/Wave/Wave";
import styles from 'App.module.scss'

const FirstContent = () => (
  <div className={styles.happyNewYearOuter}>
    <div className={styles.happyNewYearInner}>
      <h2 className={styles.happyNewYearText}>
        <span>Happy</span>
        <span>New</span>
        <span>Year</span>
        <span>2023</span>
      </h2>
      <p>
        今年もよろしくお願いします🙇
      </p>
      <div className={styles.wave}>
        <Wave />
      </div>
    </div>
  </div>
)

const SecondContent = () => (
  <div className={styles.etoOuter}>
    <div className={styles.etoInner}>
      <h2 className={styles.etoText}>卯</h2>
      <p>
        🐇今年は卯年🐇
      </p>
      <div className={styles.rabbitContainer}>
        <Rabbit />
      </div>
    </div>
  </div>
)

const App = () => {
  return (
    <div className={styles.container}>
      <main>
        <FirstContent />
        <SecondContent />
      </main>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </div>
  )
}

export default App
