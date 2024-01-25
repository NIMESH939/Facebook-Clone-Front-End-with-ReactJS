import React from 'react'
import NavBar from '../../Components/Navigation/NavBar'
import LeftPane from '../../Components/LeftPane/LeftPane'
import PostPane from '../../Components/PostPane/PostPane'
import RightPane from '../../Components/RightPane/RightPane'
import "./Home.css"

export default function Home() {
  return (
    <>
        <NavBar/>
        <div className="bottomContainer">
          <LeftPane/>
          <PostPane/>
          <RightPane/>
        </div>
    </>
  )
}
