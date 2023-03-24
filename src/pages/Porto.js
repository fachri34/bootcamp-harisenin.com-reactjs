import React, { useState } from 'react'
import Card from '../component/Card'
import '../style/porto.css'
import porto1 from '../asset/image/screenshot1.png'
import porto2 from '../asset/image/picture.png'
import porto3 from '../asset/image/travel.png'
import { Link } from 'react-router-dom'


export default function Porto() {

    const [data, setData] = useState([
        { id: 1, image: porto1, title: 'Geek Store', description: "Project ini dibuat dengan Laravel dan React js" },
        { id: 2, image: porto2, title: 'Kasir', description: "Project ini dibuat dengan next js di tampilannya saja tidak dengan apinya" },
        { id: 3, image: porto3, title: 'Web Travel App', description: "Project ini dibuat dengan menggunakan mern stack" },
      ]);



  return (
    <div>
      <div className='porto'>
        <div className='container d-flex gap-5'>
          {data.map((item, index) => (
             <Link className='link' to={`/porto/${item.id}`} key={index}>
             <Card item={item} />
           </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
