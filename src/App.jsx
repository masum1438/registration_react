import './App.css'
import Header from './component/header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmark from './component/Bookmark/Bookmark'
import { useState } from 'react'

function App() {
  let [totalTime, setTotalTime] = useState(0);
  let [bookmarks, setBookmarks] = useState([]);
  let [totalTaka, setTotalTaka] = useState(0);
  let [showWarning, setShowWarning] = useState(false); // State for showing the warning

  let handleBookmark = (blog) => {
    let newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  let handleTime = (time) => {
    let newTotalTime = totalTime + time;
    if (newTotalTime <= 20) {
      setTotalTime(newTotalTime);
      // Hide the warning if totalTime is within the limit
      setShowWarning(false);
    } else {
      // Set totalTime to 0 and show the warning if it exceeds 20
      setTotalTime(0);
      setShowWarning(true);
    }
  }

  let handlePrice = (price) => {
    let newTotalPrice = totalTaka + price;
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
          {showWarning && (
        <div className="text-red-500 text-center mt-4">
          Warning: Total time exceeded 20!
        </div>
      )}
            <Bookmark  bookmarks={bookmarks} totalTime={totalTime} totaltaka={totalTaka}></Bookmark>
          </div>
        </div>
      </div>
      
      
      
    </>
  )
}

export default App;