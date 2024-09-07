import React from 'react'
import bgImg from "/bgimg.png"

const Hero = () => {
    return (
        <div>
            <div className="img-container w-[100%] h-[50%] relative">
                <img className='w-[100%] absolute z-[-1] bg-fit ' src={`${bgImg}`} alt="" />
                <div className="text-content z-[5]">
                    <div className="title text-white text-center left-1/2 my-12 -translate-x-1/2 absolute">
                        <h1 className='text-6xl font-bold mb-10'>Purecare</h1>
                        <h3 className='text-4xl w-96 font-semibold'>Your Path to Wellness
                            Starts with a Symptom</h3>
                    </div>
                </div>
                <div className="btn-container left-[50%] my-[250px] -translate-x-1/2 absolute flex gap-10">
                    <div className="symptoms p-2 bg-[#245CF5] w-40 text-white text-center rounded-lg cursor-pointer transition-colors hover:bg-[#1a53ee]">
                        Check Symptoms
                    </div>
                    <div className="symptoms px-4 py-2 bg-[#f3f3f3] w-50 text-gray-500 text-center rounded-lg cursor-pointer transition-colors hover:bg-[#e1e2e3]">
                        Book A Appointment
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero