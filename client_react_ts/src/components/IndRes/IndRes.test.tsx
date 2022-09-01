import React from 'react'
import { render, screen } from '@testing-library/react'
import IndRes from './IndRes'

describe('Тесты индикаторов результатов тестирования', () => {
  test('Отображение индикатора УСПЕШНО результата теста', () => {
    render(<IndRes state='УСПЕШНО' />)
    const okElement = screen.getByText('УСПЕШНО')
    expect(okElement).toBeInTheDocument()
  })

  test('Отображение индикатора ОШИБКА результата теста', () => {
    render(<IndRes state='ОШИБКА' />)
    const okElement = screen.getByText('ОШИБКА')
    expect(okElement).toBeInTheDocument()
  })

  test('Отображение индикатора НЕИЗВЕСТНО результата теста', () => {
    render(<IndRes state='НЕИЗВЕСТНО' />)
    const okElement = screen.getByText('НЕИЗВЕСТНО')
    expect(okElement).toBeInTheDocument()
  })
})
