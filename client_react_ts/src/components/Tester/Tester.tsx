import React, { useState } from 'react'
import classes from './Tester.module.css'
import Ind from '../IndRes'

interface TesterProps {
  name: string
  method: TMethod
  url: string
  data?: object
}

const Tester = ({ name="Тест", method="GET", url="host", data }: TesterProps) => {
  const [result, setResult] = useState<TState>('НЕИЗВЕСТНО')

  const handleClick = async () => {
    let response

    switch (method) {
      case 'GET':
        response = await fetch(url)

        if (response.ok) {
          setResult('УСПЕШНО')
        } else {
          setResult('ОШИБКА')
        }
        break
      case 'POST':
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data),
        })

        if (response.ok) {
          setResult('УСПЕШНО')
        } else {
          setResult('ОШИБКА')
        }
        break
      case 'PATCH':
        response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data),
        })
        if (response.ok) {
          setResult('УСПЕШНО')
        } else {
          setResult('ОШИБКА')
        }
        break
      case 'PUT':
        response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(data),
        })
        if (response.ok) {
          setResult('УСПЕШНО')
        } else {
          setResult('ОШИБКА')
        }
        break
      case 'DELETE':
        response = await fetch(url, {
          method: 'DELETE',
        })
        if (response.ok) {
          setResult('УСПЕШНО')
        } else {
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

export default Tester
