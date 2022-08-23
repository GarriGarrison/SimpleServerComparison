import { render, screen } from '@testing-library/react'
import App from './App'

test('Отображение трёх модулей тестирования серверов', () => {
  render(<App />)
  // const linkElement = screen.getByText(/lear reacr/i)
  // expect(linkElement).toBeInTheDocument()
})
