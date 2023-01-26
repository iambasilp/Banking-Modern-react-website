import React from 'react'
import {stats} from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`app__stats ${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat,index)=>(
        <div key={stat.id} className='flex-1 flex justify-center items-center flex-row m-2'>
            <h4 className='text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
            <p className='text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[27px] leading-[21px] ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats