import React from 'react';
import aboutImg from '../../assets/about/about_img.JPG'
import { ABOUT_TEXT } from '../../constants';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='text-4xl my-20 text-center'>Get To Know Me</h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img src={aboutImg} alt='about william' height={480} width={480} className='rounded-lg'/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className='py-6 max-w-xl my-2 font-light' style={{lineHeight: 1.5, fontSize: 17, letterSpacing: .2}}>{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About