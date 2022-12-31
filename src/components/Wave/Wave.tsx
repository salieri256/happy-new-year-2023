import styles from 'components/Wave/Wave.module.scss';

const Wave = () => (
  <div className={styles.container}>
    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#333c5e" fill-opacity="1" d="M0,32L48,58.7C96,85,192,139,288,170.7C384,203,480,213,576,202.7C672,192,768,160,864,128C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>
)

export default Wave