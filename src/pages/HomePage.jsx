import React, { useEffect } from 'react'
import ProductsService from '../services/productsService'
import { useDispatch } from 'react-redux'
import { saveAllProductsAction } from '../store/productsSlice'

function HomePage() {

  const dispach = useDispatch()

  useEffect(()=>{
    ProductsService.getAllProducts()
    .then((res)=>{
      dispach(saveAllProductsAction(res.data.products))
    })
    .catch((err=>console.log(err)
    ))
  },[])

  return (
    <div>HomePage</div>
  )
}

export default HomePage