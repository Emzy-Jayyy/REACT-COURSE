import React from 'react'
import { useState } from 'react'
import './footer.css'

const Footer = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserMessage] = useState('');
  const [selectedValue, setSelectedValue] = useState('male');
  const [selectedDays, setSelectedDays] = useState([]);
  
  function handleDaysSelect(event) {
    const value = event.target.value;

    selectedDays((prev)=> {
        event.target.checked ? [...prev, value] : prev.filter((day) => day.value !==  value)
    });

    console.log(selectedDays);
    
  }



  return (
    <>
          <section className='company-contact-section'>
              <h1>Take A Coffee & Chat With Me</h1>
              <div className='company-contact-section-container'>

                  <div className='company-contact-details'>
                      <div className='company-details company-email'>
                          <span className='icon'><i className="fa-regular fa-envelope"></i></span>
                          <a href="mailto:davidiniemem2000@gmail.com">davidiniemem2000@gmail.com</a>
                      </div>
                      <div className='company-details company-number'>
                          <span className='icon'><i className="fa-solid fa-mobile"></i></span>
                          <a href="tel:08070612458">08070612458</a>
                      </div>
                  </div>

                  <form action="" method="get">
                      <div><input type="text" placeholder='Your username' value= {userName} onChange={(e)=> {setUserName(e.target.value)}}/></div>
                      <div><input type="email" name="" id="" placeholder='email' value={userEmail} onChange={(e) => {setUserEmail(e.target.value)}}/></div>
                      <div><textarea name="" id="" cols="30" rows="10" placeholder='Your message' value={userPhone} onChange={(e) => {setUserMessage(e.target.value)}}></textarea></div>
                      <div className='radio-button-container'>
                          <div><label htmlFor="">Male</label><input type="radio" name="gender" id="gender1" value={'male'} onChange={(e)=>{setSelectedValue(e.target.value)}} checked = {selectedValue === 'male'}/></div>
                          <div><label htmlFor="">Female</label><input type="radio" name="gender" id="gender2" value={'female'} onChange={(e)=>{setSelectedValue(e.target.value)}} checked = {selectedValue === 'male'}/></div>
                          <div><label htmlFor=""></label>Custom<input type="radio" name="gender" id="gender3" value={'custom'} onChange={(e)=>{setSelectedValue(e.target.value)}} checked = {selectedValue === 'male'}/></div>
                      </div>
                      <h3>Select day(s)</h3>
                      <div><label htmlFor="">Mon</label><input type="checkbox" name="" id="" value={'mon'} onChange={handleDaysSelect}/></div>
                      <div><label htmlFor="">Tue</label><input type="checkbox" name="" id="" value={'tue'} /></div>
                      <div><label htmlFor="">Wed</label><input type="checkbox" name="" id="" value={'wed'} /></div>
                      <div><input type="submit" value="send Message" /></div>
                  </form>
              </div>
          </section>

      </>
  )
}

export default Footer