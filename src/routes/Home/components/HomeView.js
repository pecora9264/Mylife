import React from 'react'
import { Carousel } from 'antd'
import './HomeView.scss'
import 'antd/dist/antd.css'
import Image1 from '../assets/home1.jpg'
import Image2 from '../assets/home2.jpg'
import Image3 from '../assets/home3.jpg'
import Image4 from '../assets/home4.jpg'
export const HomeView = () => (
  <div className='bb'>
    <Carousel autoplay>
    <div><img className='duck' src={Image1} /></div>
    <div><img className='duck' src={Image2} /></div>
    <div><img className='duck' src={Image3} /></div>
    <div><img className='duck' src={Image4} /></div>
  </Carousel>
  </div>
)

export default HomeView
