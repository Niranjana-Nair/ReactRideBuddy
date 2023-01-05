import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom';

export default function Topbar() {
   
    return (

        <div className='top'>
            <div className='topLeft'>
                RIDE BUDDY
            </div>

            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to="/">HOME</Link>
                    </li>
                    <li className='topListItem'><Link className='link' to="/">ABOUT</Link></li>
                    <li className='topListItem'><Link className='link' to="/">CONTACT</Link></li>
                    <li className='topListItem'><Link className='link' to="/write">WRITE</Link></li>
                    
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

    )
}




