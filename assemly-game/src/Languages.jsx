import React from 'react'
import { languages } from './languages.js'

const Languages = () => {
    const languageElements = languages.map(lang => (
        <span className='chips' 
        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        key={lang.name}
        >{lang.name}</span>
    ))
  return (
    <div className='Languages'>
        {languageElements}
    </div>
  )
}

export default Languages