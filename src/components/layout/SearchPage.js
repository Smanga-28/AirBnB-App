import React from 'react'
import { Button } from '@mui/material'
import './SearchPage.css'
import SearchResult from './SearchResult'

const SearchPage = () => {
  return (
    <div className='searchPage'>
       <div className='searchPage_info'>
        <p>62 stays . 26 August to 30 August . 2 guests</p>
        <h1>stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
        </div> 
        <SearchResult
         img='https://a0.muscache.com/im/pictures/31370689-2d79-432b-a9a6-f852f1bc3beb.jpg?im_w=720'
         location='Cape Town'
         description='Entire home in Ponta do Ouro, Mozambique'
         star={4.73}
         price='R400/night'
         total='R2799 total'
         />
       <SearchResult
         img='https://a0.muscache.com/im/pictures/31370689-2d79-432b-a9a6-f852f1bc3beb.jpg?im_w=720'
         location='Cape Town'
         description='Entire home in Ponta do Ouro, Mozambique'
         star={4.73}
         price='R400/night'
         total='R2799 total'
         />
       <SearchResult
         img='https://a0.muscache.com/im/pictures/31370689-2d79-432b-a9a6-f852f1bc3beb.jpg?im_w=720'
         location='Cape Town'
         description='Entire home in Ponta do Ouro, Mozambique'
         star={4.73}
         price='R400/night'
         total='R2799 total'
         />
       <SearchResult
         img='https://a0.muscache.com/im/pictures/31370689-2d79-432b-a9a6-f852f1bc3beb.jpg?im_w=720'
         location='Cape Town'
         description='Entire home in Ponta do Ouro, Mozambique'
         star={4.73}
         price='R400/night'
         total='R2799 total'
         />
       <SearchResult
         img='https://a0.muscache.com/im/pictures/31370689-2d79-432b-a9a6-f852f1bc3beb.jpg?im_w=720'
         location='Cape Town'
         description='Entire home in Ponta do Ouro, Mozambique'
         star={4.73}
         price='R400/night'
         total='R2799 total'
         />
       
    </div>
  )
}

export default SearchPage