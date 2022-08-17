import { useState } from 'react'
import Ind from '../Ind/Ind'
import PropTypes from 'prop-types'
import classes from './Tester.module.css'

const Tester = ({ name, method, url }) => {
  const [result, setResult] = useState('НЕИЗВЕСТНО')

  const handleClick = async () => {
    switch (method) {
      case 'GET':
        try {
          const response = await fetch(url)

          if (response.ok) {
            setResult('УСПЕШНО')
          } else {
            setResult('ОШИБКА')
          }
        } catch (error) {
          console.error(error)
          setResult('ОШИБКА')
        }
        break
      default:
        await fetch(url)
    }
  }

  return (
    <div className={classes.container}>
      <h3>{name}</h3>
      <div className={classes.container}>
        <b>{method}</b> {url}
      </div>
      <div>
        <button className={classes.btn_send} onClick={handleClick}>
          ЗАПРОС
        </button>{' '}
        Результат: <Ind state={result} />
      </div>
    </div>
  )
}

Tester.propTypes = {
  name: PropTypes.string,
}

export default Tester
