// import './pagenotfound.js'
import Skatch from './skatch.jsx';
import { sketch } from './pagenotfoundSketch';
import './pagenotfound.scss'
function Pagenotfound() {
  return (
    <div className='pagenotfound__wrapper'>
        {/* <canvas></canvas> */}
        <Skatch sketch={sketch} />
    </div>
  )
}

export default Pagenotfound
