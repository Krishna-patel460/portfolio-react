import React from 'react';

const Education = () => {
  return (
    <section id='Education' className='bg-[#FFF0F6] text-[#2E2E2E] py-20 px-6'>
      {/* bahr nu Container */}
      <div className='max-w-[1200px] mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16'>

        {/* Education nu title*/}
        <h1 className='text-3xl md:text-5xl font-bold text-center mb-12'>Education</h1>

        {/* Education nu Card Container */}
        <div className='flex flex-col md:flex-row justify-between gap-10'>

          {/* Cards ni colom */}
          <div className='w-full flex flex-col gap-6'>

            {/* SSC */}
            <div className='bg-[#FFDDEE] rounded-xl p-6 shadow-sm'>
              <h2 className='text-xl font-semibold mb-1'>SSC</h2>
              <p className='text-sm'>Completed from My Shannen School, Rajpipla.</p>
              <ul className='text-sm list-disc list-inside mt-2'>
                <li>Percentage: 85%</li>
                <li>Passing Year: 2019</li>
              </ul>
            </div>

            {/* HSC */}
            <div className='bg-[#FFDDEE] rounded-xl p-6 shadow-sm'>
              <h2 className='text-xl font-semibold mb-1'>HSC</h2>
              <p className='text-sm'>Completed from Shree Navdurga High School, Rajpipla.</p>
              <ul className='text-sm list-disc list-inside mt-2'>
                <li>Percentage: 77%</li>
                <li>Passing Year: 2022</li>
              </ul>
            </div>

            {/* B.Tech */}
            <div className='bg-[#FFDDEE] rounded-xl p-6 shadow-sm'>
              <h2 className='text-xl font-semibold mb-1'>B.Tech</h2>
              <p className='text-sm'>Currently pursuing B.Tech,Computer Engineering from MBIT college, New VV Nagar.</p>
              <ul className='text-sm list-disc list-inside mt-2'>
                <li>Current CGPA: 9.13</li>
                <li>Passing Year: 2025–2026</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;




