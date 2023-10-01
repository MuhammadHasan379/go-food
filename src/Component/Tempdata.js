import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Data from '../foodData2.json'
import Card from './TempCard'



const Tempdata = () => {






  return (
    <div>
        <Card Data = {Data}></Card>

    </div>
  )
}

export default Tempdata
