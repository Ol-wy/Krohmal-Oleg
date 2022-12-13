import React from 'react'
import './mainheader.css'
import photo from "../../Images/Logo.png"
import rain from "../../Images/Rainbow.png"
import image from "../../Images/Image.png"


const MainHeader = () => {
  return (
    <div className='mainHeader'>
      <div className='container'>
        <div className='header'>
          <div className='image'>
            <a  href="" className=''><img src={photo} alt=""/></a>
          </div>
          <ul className='links'>
            <li><a href="" className='link__inner'>Для вас</a></li>
            <li><a href="" className='link__inner'>Лучшие</a></li>
            <li><a href="" className='link__inner'>Прямые трансляции</a></li>
            <li><a href="" className='link__inner'>Поиск и найм</a></li>
            <li><a href="" className='link__inner'>Вакансии</a></li>
          </ul>
          <div className='buttom'>
            <a href="" className="btn__in">Вход</a>
            <a href="" className="btn__reg">Регистрация</a>
            <a href='' className="empty"></a>
            <a href="" className="btn__header"><img src={rain} alt="" className='rainBow'/>Попробовать бесплатно</a>
            <a href=""><img src={image} alt="" className='imageL'/></a>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default MainHeader