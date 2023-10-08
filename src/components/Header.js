import React,{ useState } from 'react'
import {UnorderedListOutlined, TwitterOutlined , FacebookOutlined, InstagramOutlined, CloudDownloadOutlined, ContainerOutlined} from '@ant-design/icons'
import './Header.css'
import './Main.css'
const Header = (prop) => {

  return (
    <div className={prop.colorHeader}>
      <p>Material Kit React</p>
      <div className='sub-head'>
       <button className='btn' onClick={prop.headFunc}>Change Theme</button>  
      <UnorderedListOutlined className='icon'/>
      <p>COMPONENTS</p>
      <ContainerOutlined className='icon'/>
      <p>UPGRADE TO PRO</p>
      <CloudDownloadOutlined className='icon'/>
      <p>DOWNLOAD</p>
      <TwitterOutlined className='icon-twitter icon'/>
      <FacebookOutlined className='icon-fb icon'/>
      <InstagramOutlined className='icon-instagram icon'/>
      </div>
    </div>
  )
}

export default Header
