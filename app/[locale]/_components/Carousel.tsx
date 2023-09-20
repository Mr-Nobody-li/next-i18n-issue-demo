/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description:
 */
import React from 'react'
import { Carousel } from 'antd'
import platformInfo from '@/app/[locale]/guanwang-ch'

const CarouselComponent: React.FC = () => (
  <Carousel autoplay>
    {platformInfo.Carousel.map((item, index) => (
      <div className="h-[490px] bg-slate-400" key={index}>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
      </div>
    ))}
  </Carousel>
)

export default CarouselComponent
