import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Divider } from 'antd';

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyObject } from '@/utils'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'
import BackTop from '../../components/back-to-top'
import { changeHeaderConfigAction } from '@/store/modules/main';

const Home = memo(() => {

  //从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo } = useSelector((state) => ({

      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }), shallowEqual)

  // 数据的转换
  // const [name, setName] = useState("佛山")
  // const tabNames = discountInfo.dest_address?.map(item => item.name)
  // const tabClickHandle = useCallback(function (index, name) {
  //   setName(name)
  // }, [])

  // 派发异步事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"))
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>

        {/* <div className='discount'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.33333%" />
        </div> */}

        {/* 热门目的地 */}
        {isEmptyObject(discountInfo) && < HomeSectionV2 infoData={discountInfo} />}
        <Divider />

        {/* 探索佛山的精彩之地 */}
        {isEmptyObject(recommendInfo) && < HomeSectionV2 infoData={recommendInfo} />}
        <Divider />

        {/* 你可能想去 */}
        {isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        <Divider />

        {/* 佛山高性价比房源 */}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        <Divider />

        {/* 佛山高分好评房源 */}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        <Divider />

        {/* 佛山的爱彼迎Plus房源 */}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}

        <BackTop />

      </div>


    </HomeWrapper>


  )
})

export default Home