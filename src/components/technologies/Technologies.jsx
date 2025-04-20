import React from 'react';
import { TECHNOLOGIES } from '../../constants';


const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            {
                TECHNOLOGIES.map((item) => (
                    <div className="rounded-2xl border-4 border-neutral-800 p-4" key={item.id}>
                        {item.icon}
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Technologies