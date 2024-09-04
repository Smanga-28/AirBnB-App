import React,{useEffect} from 'react'
import Banner from './Banner';
import './Home.css';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { listListing} from '../../actions/listingActions'


const Home = () => {
  const dispatch = useDispatch()
  const listingList = useSelector(state => state.listingList)
  const {loading,error,listings}= listingList

  useEffect(()=>{
    dispatch(listListing());
  },[dispatch])
  return (
    <div className='home'>
        <Banner/>
        {loading? <h2>loading...</h2>: error? <h3>{error.message}</h3>:(<div className='home_section'>
        {listings.map((listing)=>(
        <Card
          src={listing.img}
          title={listing.title}
          description={listing.description}
          price={listing.price}
          />
        ))}
          </div>
        )}
      <div className='home_section'>
        <Card
          src='https://a0.muscache.com/im/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720'
          title='Entire rental unit in Hartbeespoort, South Africa'
          description='2 guests1 bedroom1 bed1 bath'
          price='R1,340 ZAR /night'
        
          />
<Card
src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-ap
artment-design.jpeg'

title= 'Apartment in Osaka'
description= 'Home Tsurumibashi room301'
price= '$100/night'/>

          <Card
          src='https://a0.muscache.com/im/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720'
          title='Entire rental unit in Hartbeespoort, South Africa'
          description='2 guests1 bedroom1 bed1 bath'
          price='R1,340 ZAR /night'
          />
<Card
src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-ap
artment-design.jpeg'

title= 'Apartment in Osaka'
description= 'Home Tsurumibashi room301'
price= '$100/night'/>
        </div>
        <div className='home_section'>
        <Card
          src='https://a0.muscache.com/im/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720'
          title='Entire rental unit in Hartbeespoort, South Africa'
          description='2 guests1 bedroom1 bed1 bath'
          price='R1,340 ZAR /night'
          />
<Card
src='https://www.home-designing.com/wp-content/uploads/2014/11/japanese-ap
artment-design.jpeg'

title= 'Apartment in Osaka'
description= 'Home Tsurumibashi room301'
price= '$100/night'/>
          <Card
          src='https://a0.muscache.com/im/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720'
          title='Entire rental unit in Hartbeespoort, South Africa'
          description='2 guests1 bedroom1 bed1 bath'
          price='R1,340 ZAR /night'
          />

      <Card
          src='https://a0.muscache.com/im/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720'
          title='Entire rental unit in Hartbeespoort, South Africa'
          description='2 guests1 bedroom1 bed1 bath'
          price='R1,340 ZAR /night'
          /> 
        </div>

         
    </div>
  )
}

export default Home