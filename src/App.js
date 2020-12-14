import React from 'react'
import { GlobalStyles } from './Components/GlobalStyles'
import { NavBar } from './Components/NavBar'
import { VideoBack } from './Components/VideoBack'
import { MenuOpen } from './Components/MenuOpen'
import { MiddleContent } from './Components/MiddleContent'

function App() {
  return (
    <>
    <GlobalStyles/>
    <NavBar/>
    
    <VideoBack/>
    <MiddleContent/>
    </>
  );
}

export default App;
