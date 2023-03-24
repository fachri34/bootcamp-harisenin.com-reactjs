import React,{useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Kontak from '../pages/Kontak'
import Porto from '../pages/Porto'
import PortoDetail from '../pages/PortoDetail'
import porto1 from '../asset/image/screenshot1.png'
import porto2 from '../asset/image/picture.png'
import porto3 from '../asset/image/travel.png'



export default function Routers() {

    const [data, setData] = useState([
        { id: 1, image: porto1, title: 'Geek Store', description: "Project ini dibuat dengan Laravel dan React js" },
        { id: 2, image: porto2, title: 'Kasir', description: "Project ini dibuat dengan next js di tampilannya saja tidak dengan apinya" },
        { id: 3, image: porto3, title: 'Web Travel App', description: "Project ini dibuat dengan menggunakan mern stack" },
      ]);
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/porto' element={<Porto data={data}  />} />
            <Route path='/porto/:id' element={<PortoDetail data={data}  />} />
            <Route path='/kontak' element={<Kontak/>} />
        </Routes>
    )
}
