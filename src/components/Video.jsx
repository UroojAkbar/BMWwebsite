import React from 'react'
import ReactPlayer from 'react-player'


function Video() {
  return (
    <div className="text-center item-center justify-center container mx-w-screen-xl mx-auto  mr-40 px-10 py-10  ">
    <section className=" ml-60 mt-5 mb-20">
  <h1 className='text-[#1B3E80] font-bold text-5xl py-10 text-center'>BMW VIDEO</h1>
  <div >
              <ReactPlayer
                light={true}
                controls={true}
                url="https://youtu.be/AFtUpMTs4vI"
                height={500}
                width={860}
              />
            </div>
 
    </section>
    </div>
  )
}

export default Video