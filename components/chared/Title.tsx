import React from 'react'


interface ITitleProps { 
    children: React.ReactNode
}
const Title : React.FC <ITitleProps> = ({children}) => {
  return (
    <h2 className='uppercase font-semibold text-base text-white'>{children}</h2>
  )
}

export default Title