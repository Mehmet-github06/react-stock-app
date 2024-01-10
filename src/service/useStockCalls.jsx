import React from 'react'
import useAxios from './useAxios'
import { fetchFail,fetchStart,getFirmsSuccess } from '../features/stockSlice'

const useStockCalls = () => {
const getFirms = async () =>{
    dispatch(fetchStart)
    try {
        const {data} = await axiosWithtoken("/firms")
        dispatch(getFirmsSuccess(data))
    } catch (error) {
        
    }
}



    
  return {getFirms}
}

export default useStockCalls
