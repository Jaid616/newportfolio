import React from 'react'

const Chart = (props) => {
  return (
 

  <div className="w-1/2 md:w-1/3 lg:w-1/4 py-7">
   
    <svg viewBox="0 0 36 36" className={`circular-chart ${props.color}`}>
      <path className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        strokeDasharray={`${props.percentage} , 100`}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">{props.percentage}%</text>
    </svg>
    <p className='text-center text-xl md:text-2xl text-white font-display '>{props.name}</p>
  </div>
  )
}

export default Chart
