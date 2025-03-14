import React from 'react'
import './Homepage_Layout.css'
import { TopBlock } from '../HP_Components/TopBlock';
import { MiddleBlock_1 } from '../HP_Components/MiddleBlock_1';
import { MiddleBlock_2 } from '../HP_Components/MiddleBlock_2';
import { MiddleBlock_3 } from '../HP_Components/MiddleBlock_3';

export const Homepage_Layout = () => {
  return (
    <div className='Homepage_Layout'>
        <TopBlock/>
        <MiddleBlock_1/>
        <MiddleBlock_2/>
        <MiddleBlock_3/>
    </div>
  )
}
