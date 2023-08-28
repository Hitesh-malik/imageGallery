import { useEffect, useState } from "react"
import ImageCard from "./ImageCard"
import { useDispatch, useSelector } from "react-redux"

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('nature')

  const disptatch = useDispatch()

  const apicall = async (search) => {
    setLoading(true)
    try {
      await fetch(`https://api.pexels.com/v1/search?query=${search}`, {
        headers: {
          Authorization: "PIafKSaxSZ6G0ael4mngs8bkrb4cyhkjPSqAhzSIdMUJ6yEyVgE45GUVS",
        }
      }).then((res) => {
        return res.json()
      }).then((data) => {
        setData(data.photos)
        disptatch(ImagedataUpdate(data.photos))
      }
      )
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  function searchHandler(e) {
    if (e.key === 'Enter') {
      apicall(e.target.value);
    }
  }
  useEffect(() => {
    apicall(search);
  }, [])

  return (
    <>
      <div className="flex justify-center items-center">
        <input type="search" className="border-8 border-blue-500 border-opacity-100 rounded-full" value={search} onChange={(e) => {
          setSearch(e.target.value)
        }
        }
        onKeyUp={(e)=>{
          searchHandler(e)
        }}
         />
      </div>
      {
        loading
          ? (
            <>
              <p>loading data</p>
            </>
          )
          : (
            <>
              {
                data?.length
                  ? (
                    <div class="grid grid-cols-4 grid-rows-5 gap-8">
                      {
                        data.map((element) => {
                          return (
                            <ImageCard data={element} />
                          )
                        })
                      }
                    </div>
                  )
                  : (
                    <>
                      <p>no data found....</p>
                    </>
                  )
              }
            </>
          )
      }
    </>
  )
}
