import { CircularProgress } from '@mui/material'
import React from 'react'

function LoadingComponent() {
  return (
    <div className='flex justify-center'>
        <CircularProgress size={60} />
    </div>
  )
}

export default LoadingComponent