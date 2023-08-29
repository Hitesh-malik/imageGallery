import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate, useParams } from 'react-router-dom';
const ImageDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const navigate = useNavigate();
  const information = useSelector((state) => state.imageSlice.Imagedata)
  useState(() => {
    const filterdata = information.filter((element) => element.id == id)
    setData(filterdata[0] ?? [])
  }, [])

  console.log(data)
  return (
    <div>
    <div>
      <img src={`${data?.src?.original}`} height={"100px"} width={"500px"}/>
    </div>
      <div>{`photographer name : ${data?.photographer}`}</div>
      <div>{`photographer id : ${data?.photographer_id
        }`}</div>
        <div>{`photographer url : ${data?.photographer_url}`}</div>
        <div>{`photo Width : ${data?.height}`}</div>
        <div>{`photo Heigth : ${data?.width}`}</div>

    </div>
  )
}

export default ImageDetails