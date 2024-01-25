import React from 'react'
import "./leftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className='leftPaneMenuItem'>
            <MarkUnreadChatAltIcon/>
            <sapn className="leftPaneMenuText"> Messages</sapn>
          </li>
          <li className='leftPaneMenuItem'>
            <GroupIcon/>
            <sapn className="leftPaneMenuText"> Groups</sapn>
          </li>
          <li className='leftPaneMenuItem'>
            <RssFeedIcon/>
            <sapn className="leftPaneMenuText"> Feed</sapn>
          </li>
          <li className='leftPaneMenuItem'>
            <FlagIcon/>
            <sapn className="leftPaneMenuText"> Pages</sapn>
          </li>
          <li className='leftPaneMenuItem'>
            <CalendarMonthIcon/>
            <sapn className="leftPaneMenuText"> Events</sapn>
          </li>
          <li className='leftPaneMenuItem'>
            <BuildIcon/>
            <sapn className="leftPaneMenuText"> Settings</sapn>
          </li>
          <li className='leftPaneMenuItem'>
            <SportsEsportsIcon/>
            <sapn className="leftPaneMenuText"> Games</sapn>
          </li>
          <li className='leftPaneMenuItem'>
            <NewspaperIcon/>
            <sapn className="leftPaneMenuText"> News</sapn>
          </li>
          <li className='leftPaneMenuItem'>
            <WorkOutlineIcon/>
            <sapn className="leftPaneMenuText"> Jobs</sapn>
          </li>
          <li className='leftPaneMenuItem'>
            <StorefrontIcon/>
            <sapn className="leftPaneMenuText"> Market</sapn>
          </li>
          <hr/>
          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
          </div>
          <div className="pageList">
            <li className="pageListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName"> Code With Chupi Chupi</span>
            </li>
            <li className="pageListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName"> Code With Chapa Chapa</span>
            </li>
            <li className="pageListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName"> Code With Dubi Dubi</span>
            </li>
            <li className="pageListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName"> Code With Daba Daba</span>
            </li>
            <li className="pageListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName"> Code With Magicomi Dubi Dubi</span>
            </li>
            <li className="pageListItem">
              <img src="/images/1.jpg" alt="" className="pagePic" />
              <span className="PageName"> Code With Boom Boom Boom</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}
