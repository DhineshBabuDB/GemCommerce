import React from 'react'
import './MiddleBlock_2.css'
import dogFood3 from "../../assets/Dog_Food3.jpg"

export const MiddleBlock_2 = () => {
  return (
    <div className='MiddleBlock_2'>
        <div className='MiddleBlock_2_left'>
            <img src={dogFood3} alt="" />
        </div>
                
        <div className='MiddleBlock_2_right'>
            
            <div className='Nutrition_Title_Block'>
                <h3>Nutrition is the foundation for <br/>longer, healthier lives in dogs</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
                    saepe nihil! Porro ea odio ullam. Hic voluptas natus rep<br/>
                    ipsum tempore. Minima itaque at eos dolor deleniti. Nihil
                </p>
            </div>
        </div>
    </div>
  )
}
