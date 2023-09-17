import './App.css'
import Header from './component/header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import { useState } from 'react'

function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  const [totalTaka, setTotalTaka] = useState(0);
  

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleTime = (time) => {
    const newTotalTime = totalTime + time;
    setTotalTime(newTotalTime);
  }

  const handlePrice = (price) => {
 
      const newTotalPrice = totalTaka + price;
      setTotalTaka(newTotalPrice);
    
  }

  return (
    <>
      <div className='bg-[#F3F3F3] '>
        <Header></Header>
        <div className='grid grid-cols-6 mx-auto'>
          <div className='col-span-4 gap-3 ml-3 '>
            <Blogs
              handleBookmark={handleBookmark}
              handleTime={handleTime}
              handlePrice={handlePrice}
            >
            </Blogs>
          </div>
          <div className='col-span-2 '>
            <Bookmark bookmarks={bookmarks} totalTime={totalTime} totaltaka={totalTaka}></Bookmark>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default App;