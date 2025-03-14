import React from 'react'
import './MiddleBlock_3.css'
import dogFood4 from "../../assets/Dog_Food4.jpg"

export const MiddleBlock_3 = () => {
  return (
    <div className='MiddleBlock_1'>
        <div className='MiddleBlock_1_left'>
            <div className='Nutrition_Title_Block'>
                <h3>Nutrition is the foundation for <br/>longer, healthier lives in dogs</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
                    saepe nihil! Porro ea odio ullam. Hic voluptas natus rep<br/>
                    ipsum tempore. Minima itaque at eos dolor deleniti. Nihil
                </p>
            </div>
        </div>
                
        <div className='MiddleBlock_1_right'>
            <img src={dogFood4} alt="" />
        </div>
    </div>
  )
}
