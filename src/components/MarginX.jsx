import React from 'react'

const MarginX = (props) => {
  return (
    <>
      <div className={`${props.classItem} px-5 lg:mx-24`}>

        {props.children}
        
      </div>
    </>
  )
}

export default MarginX
