import React, {useEffect, useRef} from 'react'
import { useSelector } from "react-redux";
import { quizResultGrade } from '../../QuizResultGrade'
import lottie from 'lottie-web';
import { Link } from 'react-router-dom';
import './ResultPage.css'
import btnRestart from '../../../resources/picture/btnRestart.png'

function ResultPage() {

  const container1 = useRef(null)
  const container2 = useRef(null)
  const container3 = useRef(null)
  const container4 = useRef(null)
  const container5 = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../resources/svg/congratulation1.json'),
    })
    lottie.loadAnimation({
      container: container2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../resources/svg/congratulation2.json'),
    })
    lottie.loadAnimation({
      container: container3.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../resources/svg/first_grade.json'),
    })
    lottie.loadAnimation({
      container: container4.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../resources/svg/second_grade.json'),
    })
    lottie.loadAnimation({
      container: container5.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../resources/svg/third_grade.json'),
    })
  }, [])

  
let storedResult = 0;
storedResult = useSelector(state => state.store_result.storedScore)
//storedResult = 7;
let yourGrade = 1;

if(storedResult >= quizResultGrade[0].correct_count) {
  yourGrade = quizResultGrade[0].grade
} else if (storedResult >= quizResultGrade[1].correct_count && storedResult < quizResultGrade[0].correct_count){
  yourGrade = quizResultGrade[1].grade
} else { //(storedResult >= quizResultGrade[2].correct_count && storedResult < quizResultGrade[1].correct_count)
  yourGrade = quizResultGrade[2].grade
}
  return (
    <div className="wrap__resultDisplay">
      { yourGrade === 1 ? 
        <div className="wrap__lotties">
          <div className="lottieCongratulation1" ref={container1} />
          <div className="lottieCongratulation2" ref={container2} />
          <div className="first_grade" ref={container3} />
        </div>
        : yourGrade === 2 ? 
          <div className="wrap__lotties">
            <div className="second_grade" ref={container4} />
          </div>
        : <div className="wrap__lotties">
            <div className="third_grade" ref={container5} />
        </div>
      }
      <div className="wrap__comment">
        <div className="yourScore">
          <span>정답 수 : {storedResult}개</span>
        </div>
        <div className="commentForYou">
          {quizResultGrade[yourGrade-1].comment}
        </div>
      </div>
      <div className="wrap__btnRestart">
        <Link to="/ox_quiz">
          <img src={btnRestart} className="btnRestart" alt="" />
        </Link>
        </div>
    </div>
  )
}

export default ResultPage
