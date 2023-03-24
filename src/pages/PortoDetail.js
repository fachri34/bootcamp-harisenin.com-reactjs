import React from 'react'
import { useParams } from 'react-router-dom'
import '../style/porto-detail.css'


export default function PortoDetail(props) {

  const { id } = useParams();
  const { data } = props;

  const item = data.find(item => item.id === Number(id));


  return (
    <div className='wrap-card '>
      <div className='d-flex container'>
        <div className="card">
          <div className="card-img">
            <img src={item.image} className="card-img-top" alt="..." width={'100%'} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      </div>

    </div>
  )

}
