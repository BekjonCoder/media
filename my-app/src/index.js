import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './companets/card'
import Btn from './companets/btn'
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
    muddati:'Годовой отчет по итогам 2023 года (17.05.2024)',
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
    muddati:'Годовой отчет по итогам 2022 года (26.05.2023)',
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
    span:38,
  },
  {
    id:2,
    hammasi:'2024',
    span:23,
  },
  {
    id:3,
    hammasi:'2023',
    span:43,
  },
  {
    id:4,
    hammasi:'2022',
    span:34,
  },
  {
    id:5,
    hammasi:'2021',
    span:23,
  },
  {
    id:6,
    hammasi:'2020',
    span:74,
  },
  {
    id:7,
    hammasi:'2019',
    span:54,
  },
  {
    id:8,
    hammasi:'2018',
    span:24,
  },
  {
    id:9,
    hammasi:'2017',
    span:15,
  },
  {
    id:10,
    hammasi:'2016',
    span:62,
  },
  {
    id:11,
    hammasi:'2015',
    span:13,
  },
  {
    id:12,
    hammasi:'2014',
    span:24,
  },
]
function Booklist(){
  return (
    <>
      <div className='container'>
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
    </>

  )
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist/>)