import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

//  test('Монтирование компонента в DOM', () => {
//    render(<App />)
//    screen.debug()
//    expect(screen.getByRole(/h1/i)).toBeInTheDocument()
//  })

describe('Отображение заголовков на главной странице', () => {
  test('отображение название проекта', () => {
    render(<App />)
    const headElement = screen.getByText('Тестирование API серверов')
    expect(headElement).toBeInTheDocument()
  })

  test('отображение названий тестируемых серверов', () => {
    render(<App />)
    expect(screen.getByText('сервер NodeJS')).toBeInTheDocument()
    expect(screen.getByText('сервер Python')).toBeInTheDocument()
    expect(screen.getByText('сервер PHP')).toBeInTheDocument()
  })
})
