import React from 'react'
import "./Layout.css"
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa'

export default function Layout(props) {

  return (
    <>
      <div className='top'>
        <div className='topLeft'>
          <Link className='car' to="/home-page">
            <Icons.FaCar className="car-logo" />
          </Link>
          <Link className='logo' to="/home-page">RIDE BUDDY</Link>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to="/home-page">HOME</Link>
            </li>
            {/* <li
              className='topListItem'><Link className='link' to="/">TRIPS
                <i class="fa fa-caret-down"></i>
              </Link>
            </li> */}
            <div class="dropdown">
              <button class="dropbtn">TRIPS</button>
              <i class="fa fa-caret-down"></i>
              <div class="dropdown-content">
                {/* <a href="#">REQUESTS</a>
                <a href="#">HOSTED RIDES</a>
                <a href="#">TRIP HISTORY</a> */}
                <Link className='ddlink' to="/">REQUESTS</Link>
                <Link className='ddlink' to="/">HOSTED RIDES</Link>
                <Link className='ddlink' to="/">TRIP HISTORY</Link>
              </div>
            </div>

            <li className='topListItem'><Link className='link' to="/add-wheels">WHEELS</Link></li>
          </ul>
        </div>
        <div className='topRight'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to="/user-login">
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to="/add-user">
                REGISTER
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {props.children}
      </div>
    </>
  )
}




