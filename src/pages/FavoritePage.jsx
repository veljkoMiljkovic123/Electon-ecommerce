import React from 'react'
import { useSelector } from 'react-redux'
import CardProductComponent from '../components/CardProductComponent';

function FavoritePage() {
    const {allFavorite} = useSelector(state=>state.favoriteStore)
    console.log(allFavorite);
    
    
  return (
    <div className='container mx-auto'>
        <h1 className='text-4xl text-center text-mainBlue uppercase font-bold my-10'>Favorite Items</h1>
      <div className='flex flex-col items-center lg:flex-row gap-8'>
      {allFavorite.map((fav) => {
          return <CardProductComponent key={fav.id} product={fav} />;
        })}
      </div>
    </div>
  )
}

export default FavoritePage