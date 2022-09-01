import React from 'react'
import styles from './IndRes.module.css'

interface IndResProps {
  state: TState
}

const IndRes = ({ state }: IndResProps) => {
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

export default IndRes
