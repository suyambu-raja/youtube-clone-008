import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VideoPage from './pages/VideoPage/VideoPage'
import HomePage from './pages/HomePage/HomePage'
import axios from 'axios'


function App() {
  const [slideBar, setSlideBar] = useState(true)
  const [theme, setTheme] = useState(true)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [categories, setCategories] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&q=tamil&chart=mostPopular&regionCode=IN&videoCategoryId=${categories}&maxResults=50&key=AIzaSyAQgkWYNNiUe_pH6z666joFzzBpLD7wKek`)
        setPosts(response.data.items)
      }
      catch (err) {
        setFetchError(err.message)
      }
      finally {
        setLoading(false)
      }

    }

    fetchData()

  }, [categories])




  return (
    <main>
      {loading && <div className="message-container ">

        <div className="loading-process-container">
          <div className="loading-process" >
          </div>
        </div>
      </div>}
      {fetchError && <div className="message-container error">
        {`Error: ${fetchError}`}
      </div>}
      {!loading && !fetchError &&
        <div className="App light dark">
          <div className={theme ? "App App-light" : "App App-dark"}>
            <Navbar
              slideBar={slideBar}
              setSlideBar={setSlideBar}
              theme={theme}
              setTheme={setTheme}
            />

            <Routes>
              <Route path="*" element={<HomePage
                slideBar={slideBar}
                setSlideBar={setSlideBar}
                posts={posts}
                categories={categories}
                setCategories={setCategories}
             
              />}
              />

              <Route path="post/:id" element={<VideoPage
                posts={posts}
  
              />} />
            </Routes>

          </div>
        </div>}
    </main>
  );
}

export default App;

/* AIzaSyCGMDpOR3XR1tjWTIPMALBBJYvrAGL7NBA */
