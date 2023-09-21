/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description:
 */
'use client'

import CarouselComponent from '../_components/Carousel'
import { useI18n } from '@/locales/client'

interface Props {}

function ComponentName(props: Props) {
  const t = useI18n()
  return (
    <div>
      <CarouselComponent></CarouselComponent>

      <div className="mx-auto h-[600px] w-[90%] bg-pink-50 xl:max-w-[1140px]">
        fesfes
      </div>
    </div>
  )
}

export default ComponentName
