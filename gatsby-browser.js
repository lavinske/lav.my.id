import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'
import './src/styles/main.scss'

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>
