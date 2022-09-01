import React from 'react'
import { render, screen } from '@testing-library/react'
import Tester from './Tester'

describe('Отображение контейнера коннкретного теста', () => {
  test('Монтирование Tester в DOM', () => {
    render(<Tester name='Запрос всех пользователей' method='GET' url='http://localhost' />)
    expect(screen.getByRole(/button/i)).toBeInTheDocument()
  })
  
  test('Запрос всех пользователей', () => {
    render(<Tester name="Запрос всех пользователей" method="GET" url="http://localhost" />)
    const okElement = screen.getByText('Запрос всех пользователей')
    expect(okElement).toBeInTheDocument()
  })

  test('Отображение индикатора НЕИЗВЕСТНО результата теста', () => {
    render(<Tester name='Запрос всех пользователей' method='GET' url='http://localhost' />)
    const okElement = screen.getByText('НЕИЗВЕСТНО')
    expect(okElement).toBeInTheDocument()
  })
})
