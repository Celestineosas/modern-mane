import React, { useState } from 'react'
import { data } from '../constants';
import { motion } from 'framer-motion';


const Price = () => {
  const [selection, setSelection] = useState(null);

  function handdleSelection(currentId) {
    setSelection(selection === currentId ? null : currentId);
  }
  return (
    <div>
      {
        data.map((dataItem) => (
          <motion.div

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: dataItem.id * 0.1 }}

            key={dataItem.id}
            class="flex font-montserrat w-[500px] max-xl:w-[400px] max-lg:w-[500px] max-sm:w-[300px] justify-between items-center xl:pb-3 pb-5 pt-5 border-b border-[#A0A09A] font-body xl:text-[20px] text-[22px] max-sm:text-[18px]"
            onClick={() => handdleSelection(dataItem.id)}
          >
            <h4>{dataItem.service}</h4>
            {
              selection !== dataItem.id ?
                <span>{dataItem.price}</span> :
                <span class="bg-[#D98324] py-1.5 px-5 font-palanquin">BOOK</span>
            }
          </motion.div>
        ))

      }
    </div>
  )
}

export default Price
