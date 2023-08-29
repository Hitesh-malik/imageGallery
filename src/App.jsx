import { useEffect, useState } from "react"
import ImageCard from "./ImageCard"
import { useDispatch} from "react-redux"
import { imagedataUpdate } from "./Redux/slices/imageSlice"

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('nature')
  const dispatch = useDispatch();

  const apicall = async (search) => {
    setLoading(true)
    try {
      await fetch(`https://api.pexels.com/v1/search?query=${search}`, {
        headers: {
          Authorization: "YyEpvYgvW89Usq3giXXqmqiqYtKVS8z70mzniSS0JsFAJ3635IavupuJ",
        }
      }).then((res) => {
        return res.json()
      }).then((data) => {
        setData(data.photos)
        dispatch(imagedataUpdate(data.photos))
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
                    <div className="grid grid-cols-4 grid-rows-5 gap-8">
                      {
                        data.map((element,index) => {
                          return (
                            <ImageCard key={index} data={element} />
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
