import React from 'react'
import { GlobalStyles } from './Components/GlobalStyles'
import { NavBar } from './Components/NavBar'
import { VideoBack } from './Components/VideoBack'
import { MenuOpen } from './Components/MenuOpen'

function App() {
  return (
    <>
    <GlobalStyles/>
    <NavBar/>
    <MenuOpen/>
    <VideoBack/>
    </>
  );
}

export default App;
