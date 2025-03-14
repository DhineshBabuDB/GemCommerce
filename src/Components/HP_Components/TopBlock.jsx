import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { ImHeart } from "react-icons/im";
import { BiSolidDog } from "react-icons/bi";
import { FaHotdog } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import './TopBlock.css'
import dogFood from "../../assets/Dog_Food.jpg"




export const TopBlock = () => {
  return (
    <div className='TopBlock'>
        <div className='TopBlock_Top'>
            <h2>
                What makes us different <br/>makes them stronger
            </h2>
        </div>
        <div className='TopBlock_Middle'>
            <div className='Middle_First'>
                <div className='FoodItems'>
                    <IoFastFoodOutline className='food_icons'/>
                    <div>
                        <h3>Real Food</h3>
                        <p>wholesome recipes for dogs with real meat and veggies</p>
                    </div>
                </div>
                <div className='FoodItems'>
                    <ImHeart className='food_icons'/>
                    <div>
                        <h3>Premim Ingredient</h3>
                        <p>Elevating pet care with unmatched safty and quality</p>
                    </div>
                </div>
            </div>
            <div className='Middle_Second'>
                <img src={dogFood} alt="" />
            </div>
            <div className='Middle_Third'>
                <div className='FoodItems'>
                    <FaHotdog className='food_icons'/>
                    <div>
                        <h3>Made Fresh</h3>
                        <p>We prioritize maintaining the integrity of whole foods and nutrition.</p>
                    </div>
                </div>
                <div className='FoodItems'>
                    <BiSolidDog className='food_icons'/>
                    <div>
                        <h3>Vet Developed</h3>
                        <p>We raise the bar for dog nutrition, surpassing industry expectations.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='TopBlock_Bottom'>
            <button>
                Get your dog's healthy meal today!
            </button>
            <div className='bottom-icon-pack'>
                <div className='bottom-icon-pack-moneyBack'>
                    <BsShieldCheck className='pay_icons'/>
                    <h6>30-day money back guarantee</h6> 
                </div>
                <div className='bottom-icon-pack-icons'>
                    <FaCcPaypal className='pay_icons'/>
                    <FaCcVisa className='pay_icons'/>
                    <FaCcMastercard className='pay_icons'/>
                    <FaCcApplePay className='pay_icons'/>
                    <FaGooglePay className='pay_icons'/>
                </div>
            </div>
        </div>
    </div>
  )
}
