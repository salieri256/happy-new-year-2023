import {IconContext} from "react-icons";
import {AiFillGithub} from "react-icons/all";
import styles from 'components/Footer/Footer.module.scss'

const Footer = () => (
  <IconContext.Provider value={{ size: '48px' }}>
    <div className={styles.container}>
      <div className={styles.sns}>
        <a href='https://github.com/salieri256/happy-new-year-2023'>
          <AiFillGithub />
        </a>
      </div>
      <div>
        &copy; 2023 salieri256
      </div>
    </div>
  </IconContext.Provider>
)

export default Footer