import emailjs from 'emailjs-com'
import './contact.scss'
import { useState } from 'react'

const Contact = () => {
  const [message, setMessage] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_tlcwklk',
        e.target,
        'user_tXlmuuIKGO99nEcCfNvEo'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    setMessage(true)
  }

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type='email' name='user_email' placeholder='Email' />
          <textarea name='message' placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks! I will reply ASAP</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact
