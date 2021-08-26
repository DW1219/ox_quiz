import React, {useEffect, useRef} from 'react'
import './MainPage.css'
import imgTitle from '../../resources/picture/oxQuizTitle3.png';
import imgH1 from '../../resources/picture/h1_fix.png';
import imgH2 from '../../resources/picture/h2_fix.png';
import btnStart from '../../resources/picture/btnStart3.png';
import imgCloudMain from '../../resources/picture/cloudMain.png'
import imgHill from '../../resources/picture/hill3.png'
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';


function MainPage() {

  const container1 = useRef(null)
  const container2 = useRef(null)
  const container3 = useRef(null)

    useEffect(() => {
    lottie.loadAnimation({
      container: container1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../resources/svg/lottie_gift.json'),
    })
    lottie.loadAnimation({
      container: container2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../resources/svg/lottie_play1.json'),
    })
    lottie.loadAnimation({
      container: container3.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../resources/svg/lottie_play2.json'),
    })
  }, [])

  return (
    <div class="oxMain">
      <div class="LottieGift" ref={container1} />
      <div class="wrapImgTitle">
        <img src={imgTitle} class="imgTitle" alt=""/>
      </div>
      <div class="wrapImgH1">
        <img src={imgH1} class="imgH1" alt=""/>
      </div>
      <div class="wrapImgH2">
        <img src={imgH2} class="imgH2" alt=""/>
      </div>
      <div class="wrapButton">
        <Link to="/quiz">
          <img src={btnStart} class="btnStart" alt="" />
        </Link>
      </div>
      <div class="wrapOtherImgs">
        <img src={imgCloudMain} class="imgCloudMain" alt="" />
        <img src={imgHill} class="imgHill" alt="" />
      </div>
      <div class="LottiePlay1" ref={container2} />
      <div class="LottiePlay2" ref={container3} />
    </div>
        
  )
}

export default MainPage
