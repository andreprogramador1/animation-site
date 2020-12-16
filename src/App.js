import React from 'react'
import { GlobalStyles } from './Components/GlobalStyles'
import { NavBar } from './Components/NavBar'
import { VideoBack } from './Components/VideoBack'
import { Footer } from './Components/Footer'
import { MiddleContent } from './Components/MiddleContent'
import { DownContent } from './Components/DownContent'

function App() {
  return (
    <>
    <GlobalStyles/>
    <NavBar/>
    
    <VideoBack/>
    <MiddleContent/>
    <DownContent/>
    <Footer/>
    </>
  );
}

export default App;
