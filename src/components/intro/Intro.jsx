import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

const Intro = () => {
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ['Developer', 'Designer'],
    })
  }, [])
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/software.png' alt='' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I am</h2>
          <h1>Md Saiful Islam</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  )
}

export default Intro
