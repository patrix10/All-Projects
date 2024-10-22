import React from 'react'
import { useTheme } from './ThemeContext'
import './styles/Nineteen.css'

const NineteenComp = () => {

    const {isDarkMode} = useTheme()
    const themeClass = isDarkMode ? 'dark-theme' : 'light-theme'
  return (
    <div className={`container ${themeClass}`}>
      <p>This Component uses Selected Theme</p>
    </div>
  )
}

export default NineteenComp
