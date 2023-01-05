import Footer from '../components/shared/Footer'
import Layout from '../components/shared/Layout'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <Layout>
      <div className='Img'>
        <img
          className='topImg'
          src="https://th.bing.com/th/id/R.7934bf67c34ad2bb61260a16e0d11242?rik=yLW38LOADjPH1w&riu=http%3a%2f%2fblog.quickride.in%2fwp-content%2fuploads%2f2019%2f04%2fcarpoolgirls-1024x634.jpg&ehk=Lm6CAA4zzCvYZtV6ofqSFtoh6WH%2fZcN3yEmdW5t%2fIQg%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          width="100" height="100"
        />
        <div className="i-name">

          <div className='SpanClassHeader'>"Reduce CO2 . Save Money . Grow network" </div>

          <div className='pool'>
            <Link to="/Joinpool" className='btn1'>Join Pool</Link>
            <Link to="/host-ride" className='btn1'>Host Pool</Link>
          </div>
          {/* <button className=" btn1">Host Pool</button> */}
        </div>

      </div>


    </Layout>

  )
}