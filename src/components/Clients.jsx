import React from 'react'
import { clients } from '../constants'
import styles from '../style'
const Clients = () => {
  return (
    <section className={`app__brand ${styles.flexCenter} my-4`} id="clients">
        <div className={`${styles.flexCenter} w-full flex-wrap`}>
          {clients.map((client,index)=>(
            <div key={client.id} className="flex-1 flex justify-center items-center sm:min-w-[192px] w-[100px] m-2 flex-wrap">
                <img src={client.logo} alt="client__logo" className='sm:w-[192px] w-[100px]' />
            </div>
          ))}
        </div>
    </section>
  )
}

export default Clients