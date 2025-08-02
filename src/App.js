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
  /*   {

    kind: "youtube#video",
    etag: "RY1Xjpc81hAZVHrGSZUajsuPVUY",
    id: "Pr1OdTzZDpQ",
    snippet: {
      publishedAt: "2025-07-23T03:29:24Z",
      channelId: "UCHmk8iNJHvf5mGN6_pkPc7g",
      title: "EMIWAY BANTAI  - DUBAI COMPANY | (MUSIC BY. TONY JAMES ) | OFFICIAL MUSIC VIDEO",
      description: "Bfan link : https://bfan.link/dubai-company\n\nAudio Credits:\nSong : Dubai Company\nPerformed & Written by : Emiway Bantai \nMusic by : Tony James\nMix & Mastered by : Mix With Vasudev \n\n\nVideo Credits:\nProduction : Bantai Studio\nDirected by : Thrector,Emiway Bantai & Swaalina\nD.O.P : Thrector\nEdited by : Emiway Bantai & Thrector\nCc by : Thrector & VBreak\nVfx : Capboy Creation & VBreak \nCostume designer : Bantai Studio\nArtist Management : Pooja Kuila\nStunt Director : Samir Ahamed \nStunt by : Sayed Al Mehari\nHair Stylist : Aftab\nLine producer : Bantai Studio\nProduction Head : Pooja Kuila, Shubham Singh\nProduction Management : Shubham Singh\nWheels by : Rotana Star \nCast : Junaid, Manpreet, Gaston\nLocation Courtesy : The Zoo Wild Park Umm Al Quwain \n\nSpecial Thanks : \nSheikh Ahmed bin Nasser Al-Ma'ala, the special advisor to His Highness, the ruler of Umm AI-Qaywin… \nMohammad Moustafa, CEO Rotana Star\n\nDubai Company Streaming Link:\nSpotify: https://open.spotify.com/track/2WPrPbxLa6nmmc57neRHTT?si=7ba0d68b96944136\n\nApple Music: https://music.apple.com/us/song/dubai-company/1827975875\n\nYoutube Music: https://music.youtube.com/watch?v=i_9rDdE2Qxc&si=77UTXFqNYv3SwyZV\n\nAmazon Music: https://music.amazon.in/albums/B0FJ92G3XB?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_I5D2dEAMo3dUWoIbbskvVR5ht&trackAsin=B0FJ93RN67\n\nJio Saavn: https://www.jiosaavn.com/song/dubai-company/JFk6Y0J7Rlk\n\nGaana: https://gaana.com/song/dubai-company\n\nMerchandise here 👇🏻\nhttps://www.bantai.in/product-category/merchandise\n\n\n\nFollow Emiwaybantai :- \n\nInstagram / https://instagram.com/emiwaybantai?igshid=Zjc2ZTc4Nzk=\n\nTwitter / \nhttps://twitter.com/emiwaytweets?s=11&t=LTwkOm874W90GUY2E0M0Wg\n\nFacebook / https://www.facebook.com/emiwayofficial?mibextid=LQQJ4d",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Pr1OdTzZDpQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Pr1OdTzZDpQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Pr1OdTzZDpQ/hqdefault.jpg",
          width: 480,
          height: 360
        },
        standard: {
          url: "https://i.ytimg.com/vi/Pr1OdTzZDpQ/sddefault.jpg",
          width: 640,
          height: 480
        },
        maxres: {
          url: "https://i.ytimg.com/vi/Pr1OdTzZDpQ/maxresdefault.jpg",
          width: 1280,
          height: 720
        }
      },
      channelTitle: "Emiway Bantai",

      categoryId: "10",

    },

    contentDetails: {
      duration: "PT42M54S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular"
    },

    statistics: {
      viewCount: "2269216",
      likeCount: "266672",
      favoriteCount: "0",
      commentCount: "89313"
    }
  },
  {
    kind: "youtube#video",
    etag: "CL61gyQk9OncxKnNhz0ivT3VbJE",
    id: "CllWVGWhOEs",
    snippet: {
      publishedAt: "2025-07-25T04:38:15Z",
      channelId: "UCbTLwN10NoCU4WDzLf1JMOA",
      title: "WAR 2 Official Trailer | Telugu | Hrithik Roshan, NTR, Kiara Advani, Ayan Mukerji | YRF Spy Universe",
      description: "Get ready for the storm, the WAR begins now! #War2Trailer (Telugu) is out!\n#War2 releasing in Hindi, Telugu & Tamil on August 14th in cinemas worldwide! #YRFSpyUniverse\n\n► Subscribe Now: https://goo.gl/xs3mrY 🔔 Stay updated!\n► YRF New Releases - https://www.youtube.com/playlist?list=PLCB05E03DA939D484\n\nStay in the filmy loop:\n► Like us on Facebook: Facebook/yrf \n► Follow us on X: x.com/yrf\n► Follow us on Instagram: Instagram/yrf\n► Visit us on: yashrajfilms.com\n\n🎬 MOVIE CREDITS:\nMovie: WAR 2\nStarring: Hrithik Roshan, NTR, Kiara Advani\nDirector: Ayan Mukerji\nProducer: Aditya Chopra\nCo-Producer: Akshaye Widhani\nScreenplay: Shridhar Raghavan\nDirector of Photography: Benjamin Jasper ACS \nMusic: Pritam\nLyrics: Amitabh Bhattacharya\nDialogues: Abbas Tyrewala\nStory: Aditya Chopra\nAssociate Producer: Rishabh Chopra\nExecutive Producer: Sanjay Shivalkar\nEditor: Aarif Sheikh\nProduction Designers: Rajat Poddar, Amrita Mahal Nakai\nSound: Dileep Subramaniam, Ganesh Gangadharan\nBackground Music: Sanchit Balhara, Ankit Balhara\nAction Directors: Spiro Razatos, Franz Spilhaus, Anl Arasu, Oh Sea Young, Craig Macrae, Sunil Rodrigues [ROD]\nCostume Designers: Anaita Shroff Adajania, Niharika Jolly\nDirector of Choreography: Bosco Leslie Martis\nVisual Effects Studio: yFX\nCasting Director: Shanoo Sharma\nSupervising Producer: Gurpreet Singh\nTrailers & Promos: Mohit Sajnaney\nRelease Date: 14 August 2025\n\nThe film will be available with audio descriptions and closed captioning.\n\nAbout YRF Spy Universe:\nYRF Spy Universe is a first of its kind cinematic universe of spy thriller films in India. The first film in the universe, \"Ek Tha Tiger\", starring Salman Khan and Katrina Kaif was released in 2012, followed by its sequel \"Tiger Zinda Hai\" in 2017. The third film in the universe, \"War\" was released in 2019 and starred Hrithik Roshan and Tiger Shroff in pivotal roles. \"Pathaan\" was the fourth instalment in the Spy Universe franchise which was released in 2023 starring Shah Rukh Khan, Deepika Padukone and John Abraham. \"Tiger 3\", the fifth instalment in the YRF Spy Universe and the third film in the Tiger series, starring Salman Khan, Katrina Kaif and Emraan Hashmi, released in 2023. \"War 2\" is the sixth film of the YRF Spy Universe franchise and will release on 14 August 2025. The film stars two of the greatest cinematic icons Hrithik Roshan and NTR, with Kiara Advani in the lead and is directed by Ayan Mukerji. “Alpha”, the seventh instalment in the franchise and Hindi cinema's first female-led YRF Spy Universe film, starring Alia Bhatt and Sharvari, is set to release on 25 December 2025.\n\n#yrfnewreleases #yrf #yashraj #yashrajfilms #yrfmovies #yrfmusic #adityachopra #hrithikroshan #ntr #kiaraadvani #ayanmukerji #pritam #amitabhbhattacharya #officialtrailer #bollywoodtrailer #war2trailertelugu\n\n© Yash Raj Films Pvt. Ltd.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/CllWVGWhOEs/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/CllWVGWhOEs/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/CllWVGWhOEs/hqdefault.jpg",
          width: 480,
          height: 360
        },
        standard: {
          url: "https://i.ytimg.com/vi/CllWVGWhOEs/sddefault.jpg",
          width: 640,
          height: 480
        },
        maxres: {
          url: "https://i.ytimg.com/vi/CllWVGWhOEs/maxresdefault.jpg",
          width: 1280,
          height: 720
        }
      },
      channelTitle: "YRF",

      categoryId: "1",
    },

    contentDetails: {
      duration: "PT42M54S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular"
    },
    
    statistics: {
      viewCount: "99090909",
      likeCount: "266633372",
      favoriteCount: "0",
      commentCount: "17313"
    }

  },
  {
    kind: "youtube#video",
    etag: "-GXuS1KWP4bG8bhLWT1YfzFuZlo",
    id: "WlwDqJAfIT4",
    snippet: {
      publishedAt: "2025-07-24T03:30:20Z",
      channelId: "UCX8pnu3DYUnx8qy8V_c6oHg",
      title: "BUYING A NEW SPORTS CAR | CAR DEALER SIMULATOR GAMEPLAY #3",
      description: "BUYING A NEW SPORTS CAR | CAR DEALER SIMULATOR GAMEPLAY #3\n\n\nSubscribe to our Second YouTube Channel: https://www.youtube.com/c/UjjwalGamer\n\n\nShare, Support, Subscribe!!!\nSubscribe: http://bit.ly/technogamerz\nDiscord : https://bit.ly/ujjwaldiscord\nYoutube: https://www.youtube.com/c/TechnoGamerzOfficial\nTwitter:  https://www.twitter.com/ujjwalgamer\nFacebook: https://www.facebook.com/technogamerz\nFacebook Myself: https://www.facebook.com/ujjwalgamer\nInstagram: https://instagram.com/ujjwalgamer\nGoogle Plus: https://plus.google.com/+TechnoGamerzOfficial\nWebsite: https://technogamerz.in/\nMerchandise: https://shop.technogamerz.in/\n\n\nBusiness Email : technogamerzofficial@gmail.com\n\n\nAbout : Techno Gamerz is a YouTube Channel, where you will find gaming videos in Hindi, I hope this video was Useful and you liked it, if you did press the thumbs up button.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WlwDqJAfIT4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WlwDqJAfIT4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WlwDqJAfIT4/hqdefault.jpg",
          width: 480,
          height: 360
        },
        standard: {
          url: "https://i.ytimg.com/vi/WlwDqJAfIT4/sddefault.jpg",
          width: 640,
          height: 480
        },
        maxres: {
          url: "https://i.ytimg.com/vi/WlwDqJAfIT4/maxresdefault.jpg",
          width: 1280,
          height: 720
        }
      },

      channelTitle: "Techno Gamerz",

      categoryId: "20",
    },
    contentDetails: {
      duration: "PT42M54S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular"
    },

    statistics: {
      viewCount: "8869216",
      likeCount: "2633672",
      favoriteCount: "0",
      commentCount: "17313"
    } 


  }]);  */
  /* {
    title: "How to put your website on the internet",
    image: require('./assets/thumbnail1.png'),
    channel: "Code Academy",
    views: "1.2M views",
    hrs: "2 days ago"
  },
  {
    title: "Gaming Highlights 2025",
    image: require('./assets/thumbnail2.png'),
    channel: "GamerPro",
    views: "800K views",
    hrs: "5 hours ago"
  },
  {
    title: "Top 10 Automobiles",
    image: require('./assets/thumbnail3.png'),
    channel: "AutoWorld",
    views: "500K views",
    hrs: "1 week ago"
  },
  {
    title: "Music Trends 2025",
    image: require('./assets/thumbnail4.png'),
    channel: "MusicMania",
    views: "2M views",
    hrs: "3 days ago"
  },
  {
    title: "React Tutorial for Beginners dfdfddfdfdfdfdffdfd dfdfdfdfdf1",
    image: require('./assets/thumbnail5.png'),
    channel: "Code Academy1",
    views: "1.2M views",
    hrs: "2 days ago"
  },
  {
    title: "Gaming Highlights 20251",
    image: require('./assets/thumbnail6.png'),
    channel: "GamerPro1",
    views: "800K views",
    hrs: "5 hours ago"
  },
  {
    title: "Top 10 Automobile",
    image: require('./assets/thumbnail7.png'),
    channel: "AutoWorld1",
    views: "500K views",
    hrs: "1 week ago"
  },
  {
    title: "Music Trends 20251",
    image: require('./assets/thumbnail8.png'),
    channel: "MusicMania",
    views: "2M views",
    hrs: "3 days ago"
  }, */

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
      {loading && <div className="loading-container ">

        <div className="loading-process-container">
          <div className="loading-process" >
          </div>
        </div>
      </div>}
      {fetchError && <div className="error">
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