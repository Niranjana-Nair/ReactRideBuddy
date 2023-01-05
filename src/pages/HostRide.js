import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/shared/Layout'
import "./HostRide.css"

export default function HostRide() {
    return (
        <>

<Layout/>
            <div className="hr-title">
                <h2>Host a Pool</h2>
            </div>
            <div className="body-content">
                <form autoComplete="off" className="hostaride">


                    <div className="input-box">
                        <label>Start Location</label>
                        <input className={"form-control"} type="text" placeholder="Hey,Where do you start?" name="startplace" />
                    </div>


                    <div className="column">
                        <div className="input-box">
                            <label>Date</label>
                            <input type="date" className={"form-control"} placeholder="Which Date?" name="date" />
                        </div>
                        <div className="input-box">
                            <label>Time</label>
                            <input type="time" className={"form-control"} placeholder="And What Time?" name="time" />
                        </div>
                    </div>
                    <div className="input-box">
                        <label>Destination</label>
                        <input className={"form-control"} type="text" placeholder="Enter your destination" name="endplace" />
                    </div>
                    <div className="input-box">
                        <label>Add/Select Wheels </label>
                        {/* <button className='add-wheel'><i class="fa fa-plus-circle" aria-hidden="true"></i> add/select wheel</button> */}
                        
                        <Link className='add-w' to="/add-wheels"><i class="fa fa-plus-circle" aria-hidden="true"></i></Link>
                     

                    </div>

                    <div className="column">
                        <div className="input-box">
                            <label>Fare</label>
                            <input type="number" className={"form-control"} placeholder="Fare" name="fare" />
                        </div>
                        <div className="input-box">
                            <label>Select number of seats</label>
                            <div className="select-box">

                                <select type="number" className={"form-control"} placeholder="Number" name="numberOfSeats">
                                    {/* <i class="fa fa-caret-down"></i> */}
                                    <option hidden>Number of Seats</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <div className='invite'>
                        <button >Invite Buddies</button>
                    </div> */}
                    <div className='submit'>
                        <button>Host Pool</button>
                    </div>

                </form>
            </div>

        </>
    )
}


