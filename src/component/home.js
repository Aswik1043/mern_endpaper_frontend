import React from 'react'
import './css/home.css'
import Movie from './movie'
import imag1 from './images/img1.jpg'
import imag2 from './images/img2.jpg'
import imag3 from './images/img3.jpg'
import imag4 from './images/img4.jpg'
import imag5 from './images/img5.jpg'
import imag6 from './images/img6.jpg'
import imag7 from './images/img7.jpg'
import imag8 from './images/img8.jpg'
import imag9 from './images/img9.jpg'
import imag10 from './images/img10.jpg'
import imag11 from './images/img11.jpg'
import imag12 from './images/img12.jpg'

function Home() {
  return (
    <div className='container'>
        <Movie img = {imag1} moviename = "Por Thozil" block = "Crime/Thriller" IMBDRating = "8.7"/>
        <Movie img = {imag2} moviename = "Transformer:Rise of the Beasts" block = "Action/Adventur" IMBDRating = "6.6"/>
        <Movie img = {imag3} moviename = "Takkar" block = "Action/Comedy/Romantic" IMBDRating = "9.1"/>
        <Movie img = {imag4} moviename = "Spider-Man:across the Spider Verse" block = "Action/Adventure/Animation" IMBDRating = "8.5"/>
        <Movie img = {imag5} moviename = "Veeran" block = "Action/Drama/Fantasy" IMBDRating = "9.8"/>
        <Movie img = {imag6} moviename = "The Flash" block = "Action/Drama/Fantasy" IMBDRating = "8.6"/>
        <Movie img = {imag7} moviename = "Good Night" block = "Comedy/Romantic" IMBDRating = "6.9"/>
        <Movie img = {imag8} moviename = "Pichaikaran 2" block = "Action/Thriller" IMBDRating = "7.5"/>
        <Movie img = {imag9} moviename = "Kathar Basha Endra Muthuramalingam" block = "Action/Drama/Fantasy" IMBDRating = "6.5"/>
        <Movie img = {imag10} moviename = "Messaiya Muruku" block = "Action/Comedy/Romantic" IMBDRating = "9.9"/>
        <Movie img = {imag11} moviename = "MS Dhoni" block = "LegendStory/Comedy/Romantic/Lifestory" IMBDRating = "10"/>
        <Movie img = {imag12} moviename = "Ponniyin selvan 2" block = "Hist Orical" IMBDRating = "8.8"/>
    </div>
  )
}

export default Home