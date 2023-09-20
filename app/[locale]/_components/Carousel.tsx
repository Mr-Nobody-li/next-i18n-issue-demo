/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description:
 */
import { Carousel } from "antd";
import platformInfo from "@/app/[locale]/guanwang-ch";

const CarouselComponent: React.FC = () => (
  <Carousel autoplay>
    {platformInfo.Carousel.map((item, index) => (
      <div className="bg-slate-400 h-[490px]" key={index}>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
      </div>
    ))}
  </Carousel>
);

export default CarouselComponent;
