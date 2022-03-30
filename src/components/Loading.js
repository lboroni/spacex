import React from 'react'
import LoadingRocket from '../assets/loading.png';

const Loading = () => {
  return (
    <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <img src={LoadingRocket} alt="Loading..." style={{width: '100px'}} />
      Loading...
    </div>
  )
}

export default Loading