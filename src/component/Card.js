import React from 'react'
import { Link } from 'react-router-dom'
import '../style/card.css'


export default function Card({ item }) {
    const {id, image, title } = item

    return (
        <div className='d-flex gap-5'>
            <div className="card text-align-center">
                <div className="card-img">
                    <img src={image} className="card-img-top" alt="..." width={'100%'} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <Link to={`/porto/${id}`} className="btn btn-primary ml-20">Detail</Link>
                </div>
            </div>
        </div>
    )
}
