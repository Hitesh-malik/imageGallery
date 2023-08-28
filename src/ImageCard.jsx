import React from 'react'

const ImageCard = ({data}) => {
  return (
    <div className="h-[500px] w-[400px] m-8">
        <img src={`${data?.src?.original}`} className='object-cover w-full h-[500px]'/>
    </div>
  )
}

export default ImageCard