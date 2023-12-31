/*
 * @Author: Mr-Nobody-li
 * @Date: 2023-09
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-09
 * @Description: footer
 */
import Image from 'next/image'
import Link from 'next/link'
import platformInfo from '@/app/[locale]/guanwang-ch'
import { useI18n } from '@/locales/client'

export default function Footer({ locale }: { locale: string }) {
  const t = useI18n()

  const { products, companyInfo } = platformInfo

  return (
    <footer className="bg-[#2f4566] pb-[50px]">
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-8 border-b border-solid border-white  py-[30px] text-white transition-colors duration-150 md:grid-cols-7 xl:max-w-[1140px]">
        {/* 公司介绍 */}
        <div className="col-span-1 md:col-span-2">
          <div className="h-[50px]">
            <Link
              href="/"
              className="flex flex-initial items-center font-bold md:mr-24"
            >
              <Image
                src="/images/logo-white.png"
                width={100}
                height={30}
                alt=""
              />
            </Link>
          </div>

          <ul className="flex flex-initial flex-col text-gray-300 md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">{companyInfo.name}</li>
            <li className="py-3 md:py-0 md:pb-4">
              {t('diZhi')}：{companyInfo.address}
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              {t('heZuo')}：{companyInfo.email}
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              {t('dianHua')}：{companyInfo.phone}
            </li>
          </ul>
        </div>

        {/* 关于我们 */}
        <div className="col-span-1 md:col-span-1">
          <div className="h-[50px]">
            <Link
              href={`/${locale}/aboutUs`}
              className="font-bold text-white hover:text-blue-400"
            >
              {t('guanYuWoMen')}
            </Link>
          </div>

          <ul className="flex flex-initial flex-col md:flex-1">
            {products.map((item, index) => {
              return (
                <li className="py-3 md:py-0 md:pb-4" key={index}>
                  <Link
                    href={`/${locale}/products/${item.name}`}
                    className="text-gray-300 hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* 产品中心 */}
        <div className="col-span-1 md:col-span-1">
          <div className="h-[50px]">
            <Link
              href={`/${locale}/aboutUs`}
              className="font-bold text-white hover:text-blue-400"
            >
              {t('chanPinZhongXin')}
            </Link>
          </div>

          <ul className="flex flex-initial flex-col md:flex-1">
            {products.map((item, index) => {
              return (
                <li className="py-3 md:py-0 md:pb-4" key={index}>
                  <Link
                    href={`/${locale}/products/${item.name}`}
                    className="text-gray-300 hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* 联系我们 */}
        <div className="col-span-1 md:col-span-1">
          <div className="h-[50px]">
            <Link
              href={`/${locale}/aboutUs`}
              className="font-bold text-white hover:text-blue-400"
            >
              {t('lianXiWoMen')}
            </Link>
          </div>

          <Image src="/images/wechat.jpg" width={70} height={70} alt="" />
        </div>
      </div>
    </footer>
  )
}
