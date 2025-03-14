import React from 'react'
import './MiddleBlock_1.css'
import dogFood2 from "../../assets/Dog_Food2.jpg"

export const MiddleBlock_1 = () => {
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
            <div className='Nutrition_Content_Block'>
                <div className='KeyPoints'>
                    <h5>Key Points:</h5>
                </div>
                <div className='KeyPoints_Percentage'>
                    <span>97%</span>
                    <div className='KeyPoints_Percentage_Content'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>
                            In, nostrum possimus officia sed ullam officiis ab volupta
                        </p>
                    </div>
                </div>
                <div className='KeyPoints_Percentage'>
                    <span>84%</span>
                    <div className='KeyPoints_Percentage_Content'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>
                            In, nostrum possimus officia sed ullam officiis ab volupta
                        </p>
                    </div>
                </div>
                <div className='KeyPoints_Percentage'>
                    <span>92%</span>
                    <div className='KeyPoints_Percentage_Content'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>
                            In, nostrum possimus officia sed ullam officiis ab volupta
                        </p>
                    </div>
                </div>
            </div>
            <div className='Nutrition_Button'>
                <button>
                    Give your furry friend the gift of wholesome nutrition
                </button>
            </div>
        </div>
                
        <div className='MiddleBlock_1_right'>
            <img src={dogFood2} alt="" />
        </div>
    </div>
  )
}
