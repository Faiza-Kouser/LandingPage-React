import React from 'react'
import { TwitterOutlined , FacebookOutlined, InstagramOutlined, HeartFilled,ChromeOutlined, SlackOutlined} from '@ant-design/icons'

import image2 from '../images/image2.jpg'
import './Main.css'

const Main = (prop) => {
  let class1 = "heading";
  let newClass = prop.colorChange  || "";
 console.log(prop.array[1]);
  return (
    <div className={prop.array[0]}>
        <div className='img'>
         <img src ={image2} alt="display-picture" className='display-pic'/>
        </div>
        
        <div className={'content-div'}>
        <p className={prop.array[1]}>Chiristian Louboutin</p>
        <p className={prop.array[2]}>DESIGNER</p>
        <div className={prop.array[4]}>
          <TwitterOutlined className='icon-main-twitter icon-main'/>
          <InstagramOutlined className='icon-main-instagram icon-main'/>
          <FacebookOutlined className='icon-main-facebook icon-main'/>
        </div>
        <p className={prop.array[3]}>An artist of considerable range.Chet Faker- naem taken byMelbourne raised, Brooklyn-based
        <br></br> Nick Murphy- writes, perform and recorgd all of his own music,giving it a warm, intimate feel
        <br></br> with a solid groove struecture. </p>
        <div className={prop.array[4]}>
          <ChromeOutlined className='icon-main icon-end'/>
          <SlackOutlined className='icon-main icon-end'/>
          <HeartFilled className='icon-main icon-end'/>
        </div>
        <div className='labels'>
          <p className='label'>STUDIO</p>
          <p className='label'>WORK</p>
          <p className='label'>FAVOURITE</p>
        </div>
      </div>
    </div>
  )
}

export default Main
