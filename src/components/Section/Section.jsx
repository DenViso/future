import React from 'react'

export const Section = () => {
  return (
    <div className='section' >
      <ul className='sectionList'>
        <li className='sectionPart'>
          <h2>Прикраси</h2>
          <img src="./img/logo/section/ring.png" alt="" />
        </li>
        <li className='sectionPart'>
          <h2>Коштовне каміння</h2>
          <img src="./img/logo/section/diamond.png" alt="" />
        </li>
        <li className='sectionPart'>
          <h2>Послуги</h2>
          <img src="./img/logo/section/Services.png" alt="" />
        </li>
        <li className='sectionPart'>
          <h2>Рекомендації догляду</h2>
          <img src="./img/logo/section/care.png" alt="" />
        </li>
        <li className='sectionPart'>
          <h2>Відгуки</h2>
          <img src="./img/logo/section/reviews.png" alt="" />
        </li>
        <li className='sectionPart'>
          <h2>Про нас</h2>
          <img src="./img/logo/section/team.png" alt="" />
        </li>
      </ul>
    </div>
  )
}

// export default Section