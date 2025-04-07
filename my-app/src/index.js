import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './companets/card'
import Btn from './companets/btn'
import Footer from './companets/footer'
const card=[
  {
    id:1,
    document:'📄',
    muddati:'Отчет за II квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:2,
    document:'📄',
    muddati:'Годовой отчет по итогам 2023 года ',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:3,
    document:'📄',
    muddati:'Отчет за I квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:4,
    document:'📄',
    muddati:'Отчет за III квартал 2023 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:5,
    document:'📄',
    muddati:'Отчет за II квартал 2023 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:6,
    document:'📄',
    muddati:'Годовой отчет по итогам 2022 года ',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:7,
    document:'📄',
    muddati:'Отчет за I квартал 2023 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:8,
    document:'📄',
    muddati:'Отчет за III квартал 2022 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:9,
    document:'📄',
    muddati:'Отчет за II квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:10,
    document:'📄',
    muddati:'Отчет за II квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:11,
    document:'📄',
    muddati:'Отчет за II квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:12,
    document:'📄',
    muddati:'Отчет за II квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:13,
    document:'📄',
    muddati:'Отчет за II квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:14,
    document:'📄',
    muddati:'Отчет за II квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:15,
    document:'📄',
    muddati:'Отчет за II квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },
  {
    id:16,
    document:'📄',
    muddati:'Отчет за II квартал 2024 года',
    hajmi:'PDF, 440 Kb',
    yuklash:"✅"
  },

]
const btn=[
  {
    id:1,
    hammasi:'Все',
    span:3,
  },
  {
    id:2,
    hammasi:'2024',
    span:2,
  },
  {
    id:3,
    hammasi:'2023',
    span:4,
  },
  {
    id:4,
    hammasi:'2022',
    span:3,
  },
  {
    id:5,
    hammasi:'2021',
    span:3,
  },
  {
    id:6,
    hammasi:'2020',
    span:4,
  },
  {
    id:7,
    hammasi:'2019',
    span:5,
  },
  {
    id:8,
    hammasi:'2018',
    span:4,
  },
  {
    id:9,
    hammasi:'2017',
    span:5,
  },
  {
    id:10,
    hammasi:'2016',
    span:6,
  },
  {
    id:11,
    hammasi:'2015',
    span:1,
  },
  {
    id:12,
    hammasi:'2014',
    span:2,
  },
]
const li=[
  'Существенные факты',
  'Отчеты',
  'Эмиссия',
  'Дивиденды',
  'Еще'
]
const footer=[
  {
    id:1,
    bankamat:'Отделения и банкоматы',
    valyuta:'Курсы валют',
    kabinet:'Личный кабинет',
    svyaz:'Обратная связь'
  },
  {
    id:2,
    bankamat:'Отделения и банкоматы',
    valyuta:'Курсы валют',
    kabinet:'Личный кабинет',
    svyaz:'Обратная связь'
  },
  {
    id:3,
    bankamat:'Личный кабинет',
    valyuta:'Курсы валют',
    kabinet:'Отделения и банкоматы',
  },
]

function Booklist(){
  return (
    <>
    <main className='nav'>
          <div className='nav1'>
          <img src='https://hamkorbank.uz/assets/images/static/logo.svg'></img>
          <ul>
            {
              li.map((li)=>{
                return <li className='li'><a href='#'>{li}</a></li>
              })
            }
           
          </ul>
          <button className='media'>📊</button>
          <div className='btn5'>
            <h1 className='btn3'><span className='pul1'>$  12 900</span> <span className='olish'>Купить</span> <span className='pul2'>13 000</span> <span className='sotish'>Продать</span></h1>
            <button className='bank'>Интернет-банк</button>
          </div>
          </div>
        </main>
      <div className='container'>
        
      <h1 className='h1'>Отчеты</h1>

    <div className='btn2'>
      {
        btn.map((btn)=>{
          return <Btn {...btn} key={card.id} id={btn.id}/>
        })
      }
    </div>
      <div className='container2'>
      {
      
      card.map((card)=>{
        return <Card {...card} id={card.id} key={card.id}/>
      })
    }
      </div>
          
      </div>
      <div className='footer'>
           <div className='foot'>
           <div className='raqam'>
              <h1>0 (800) 1 200 200, 1256</h1>
              <p>Колл центр</p>
              <h1>+ 998 (78) 150 91 25</h1>
              <p>Колл центр</p>
            </div>
          {

            footer.map((item)=>{
              return <Footer {...item} key={item.id}/>
            })
          }
          <div className='mobil'>
            <img src='https://hamkorbank.uz/assets/images/static/mobile_app.svg' />
            <div className='px'>
              <h1 className='h2'>Мобильный банк</h1>
              <p>Приложение для Android и iOS</p>
            </div>
          </div>
           </div>
           <div className='foot2'>
            <button>Сообщить о коррупции</button>
            <div className='icon'>
            <p>&#8497;</p>
            <p>&#128247;</p>
            <p>&#9654;</p>
            <p>&#10146;</p>
            </div>
           </div>
          </div>
    </>

  )
}



const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist/>)