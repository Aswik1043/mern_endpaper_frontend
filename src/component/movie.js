import React from 'react'
import  './css/movie.css'
function movie(props) {
  return (
    <div className='liofmovies'>
        <img src={props.img} alt='movieimg'></img>
        <div className='Movie'>{props.moviename}</div>
        <div className='IMBDRating'>{props.IMBDRating}</div>
        <div className='block'>{props.block}</div>
        <button>Book Ticket</button>
    </div>
  )
}

export default movie