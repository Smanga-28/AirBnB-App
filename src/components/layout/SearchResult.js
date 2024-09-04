import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const SearchResult = ({img,location, title, description ,star ,price ,total}) => {

  return (
    <div className='searchResult'>
        <img src={img} alt=''></img>
        <FavoriteBorderIcon className='searchResult_heart'/>
        <div className='searchResult_info'>
            <div className='searchResult_infoTop'>
              <p>{location}</p>
              <p>{title}</p>
              <p>----</p>
              <p>{description}</p>
            </div>
                 <div class="searctResult_infoBottom">
                    <div className='searchResult_stars'>
                      <p><strong>{star}</strong></p>
                    </div>
                 <div className='searchResult_price'>
                   <h2>{price}</h2>
                   <p>{total }</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult