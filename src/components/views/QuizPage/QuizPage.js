import React, {useEffect, useState, useRef} from 'react'
import { useDispatch } from "react-redux";
import { storeResult } from '../../../store/_actions/actions';
import imgO from '../../../resources/picture/O.png'
import imgX from '../../../resources/picture/X.png'
import imgHill10 from '../../../resources/picture/hill10.png'
import emo_correct from '../../../resources/picture/emo_correct.png'
import emo_incorrect from '../../../resources/picture/emo_incorrect.png'
import btnNextQuestion from '../../../resources/picture/next_button.png'
import btnSeeResult from '../../../resources/picture/btnSeeResult.png'
import imgCorrect from '../../../resources/picture/correct.png'
import imgIncorrect from '../../../resources/picture/incorrect.png'
import './QuizPage.css'
import lottie from 'lottie-web';
import {quizData} from '../../QuizData'
import bgm_correct from "../../../resources/music/bgm_correct.mp3"
import bgm_incorrect from "../../../resources/music/bgm_incorrect.mp3"
import { Link } from 'react-router-dom';


let tempStoreResult = 0;

function QuizPage() {

  const bgmRef_correct = useRef(null);
  const bgmRef_incorrect = useRef(null);

  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [isSolvedQuestion, setisSolvedQuestion] = useState(false)
  const [isCorrectQuestion, setisCorrectQuestion] = useState(true)
  const [isFinalQuestion, setisFinalQuestion] = useState(false)

  const container1 = useRef(null)
  const container2 = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../resources/svg/lottie_amusement1.json'),
    })
    lottie.loadAnimation({
      container: container2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../resources/svg/lottie_amusement2.json'),
    })
  }, [])

  const dispatch = useDispatch();

  const submitAnswer = (event) => {
    setisSolvedQuestion(true)
    if(event.target.alt === quizData[currentQuestion].answer)
    {
      //console.log("정답")
      bgmRef_correct.current.play();
      setisCorrectQuestion(true)
      tempStoreResult++;
    }
    else {
      //console.log("오답")
      bgmRef_incorrect.current.play();
      setisCorrectQuestion(false)
    }
    if(currentQuestion === (quizData.length - 1)){
      setisFinalQuestion(true)
      console.log(tempStoreResult)
      dispatch(storeResult(tempStoreResult))
    }
    //console.log(event.target.alt)
  }

  const removePopup = () => {
    setisSolvedQuestion(false)
    let tempCurrentState = currentQuestion
    tempCurrentState += 1;
    if(tempCurrentState <quizData.length){
      setcurrentQuestion(tempCurrentState)
    }
    //console.log("tempCurrentState: "+tempCurrentState)
    //console.log("currentQuestion: "+currentQuestion)
  }

  const ResultPopUp = () => {
    return (
      <div className = "wrap__DescriptionPopup">

        <div className="wrap__EmoImages">
          {isCorrectQuestion 
            ? <img src={emo_correct} className="emo_image" alt="" />
            : <img src={emo_incorrect} className="emo_image" alt="" />}
        </div>
        <div className="wrap__SentenceImages">
          {isCorrectQuestion 
            ? <img src={imgCorrect} className="sentenceImage" alt="" />
            : <img src={imgIncorrect} className="sentenceImage" alt="" />}
        </div>
        <div className="describeAnswer">
            <div className="correctAnswer">
              <span>정답 : {quizData[currentQuestion].answer}</span>
            </div>
            <div className="correctDescription">
              {quizData[currentQuestion].description}
            </div>
        </div>
        <div className="wrap__popUpButton">
          {isFinalQuestion 
            ?
            <Link to="/result">
              <img src={btnSeeResult} className="btnSeeResult" alt="" />
            </Link>
            : <img src={btnNextQuestion} className="btnNextQuestion" alt="" onClick={removePopup}/>}
        </div>
      </div>
    )
  } 

  return (
    <div className = "oxQuiz">
      <audio src={bgm_correct} ref={bgmRef_correct}/>
      <audio src={bgm_incorrect} ref={bgmRef_incorrect}/>
      {isSolvedQuestion && <ResultPopUp/>}
      <div className="wrap__QuestionNumber">
        <div className="questionNumberText">
          QUIZ {quizData[currentQuestion].id}
        </div>
      </div>
      <div className = "oxQuestionBox">
        <div className = "oxQuestionText">
          {quizData[currentQuestion].question}
        </div>
      </div>
      <div className="wrap__OXButton">
        <img src={imgO} className="imgO" alt="O" onClick={submitAnswer}/>
        <img src={imgX} className="imgX" alt="X" onClick={submitAnswer}/>
      </div>
      <div className="lottieAmusement1" ref={container1} />
      <div className="lottieAmusement2" ref={container2} />
      <div className="wrap__ImgHill">
        <img src={imgHill10} className="imgHill10" alt=""/>
      </div>
    </div>
  )
}

export default QuizPage
