import PropTypes from 'prop-types'
import styles from './Ind.module.css'

const Ind = ({ state }) => {


  return (
    <span className={styles.box}>
      {state === 'НЕИЗВЕСТНО' ? (
        <span className={styles.unknow}>{state}</span>
      ) : state === 'УСПЕШНО' ? (
        <span className={styles.suсcess}>{state}</span>
      ) : (
        <span className={styles.fault}>{state}</span>
      )}
    </span>
  )
}

Ind.propTypes = {
  name: PropTypes.string,
}

export default Ind
