import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders title project', () => {
  render(<App />)
  const headElement = screen.getByText(/api/i)
  expect(headElement).toBeInTheDocument()
})

//footer - Garrison
//Node, Python, Php
