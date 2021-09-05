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


  const imgLoad = () => {
    const imgArr = Array.prototype.slice.call(document.querySelectorAll('.lazy-load'));
    console.log(imgArr)
    //Promise.all(imgArr.map((item, index) => {
    Promise.allSettled(imgArr.map((item, index) => {
      console.log(item)
        return new Promise(resolve => {
            item.addEventListener('load', () => {
                resolve();
            })
            item.src = item.getAttribute('lazy-src');
        })
    }))
        .then(_ => {
            document.querySelector('.oxMain').classList.add('is_loaded');
        })
        .catch(err => console.log(err));
}


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
    imgLoad();
  }, [])

  return (
    <div className="oxMain">
      <div className="LottieGift" ref={container1} />
      <div className="wrap__ImgTitle">
        <img lazy-src={imgTitle} className="lazy-load imgTitle" alt=""/>
      </div>
      <div className="wrap__ImgH1">
        <img lazy-src={imgH1} className="lazy-load imgH1" alt=""/>
      </div>
      <div className="wrap__ImgH2">
        <img lazy-src={imgH2} className="lazy-load imgH2" alt=""/>
      </div>
      <div className="wrap__Button">
        <Link to="/quiz">
          <img lazy-src={btnStart} className="lazy-load btnStart" alt="" />
        </Link>
      </div>
      <div className="wrap__OtherImgs">
        <img lazy-src={imgCloudMain} className="lazy-load imgCloudMain" alt="" />
        <img lazy-src={imgHill} className="lazy-load imgHill" alt="" />
      </div>
      <div className="LottiePlay1" ref={container2} />
      <div className="LottiePlay2" ref={container3} />
    </div>
        
  )
}

export default MainPage
