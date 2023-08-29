import React from 'react'
import { useNavigate  } from "react-router-dom";
const ImageCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className="h-[500px] w-[400px] m-8" onClick={()=>navigate(`/ImageDetials/${data.id}`)}>
        <img src={`${data?.src?.original}`} className='object-cover w-full h-[500px]'/>
    </div>
  )
}

export default ImageCard