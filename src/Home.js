import React from 'react'
import Container from '@mui/material/Container';
const Home = () => {
  return (
    <div>

    <Container  className='border border-gray-800 p-3'>

      <div className='w-full h-14 bg-orange-100 pt-3 px-16 text-xl'>ADD EXPERT</div>
      <div className='lg:w-[70%] flex flex-col sm:flex-row sm:space-x-28 '>
      <div>
      {/* <label for="name">Name</label> */}
        <div className='py-3'>
            <input className='w-full sm:w-48 h-12 pb-5 border  bg-gray-50 border-slate-800 rounded-lg' type="text" Name="myName" id="name" placeholder="Enter your name"/>
        </div>
        </div>
        <div>
      {/* <label for="name">Contact No.</label> */}
        <div className='pb-3 w-full'>
            <input className='w-full pb-5 sm:w-48 h-12 border  bg-gray-50 border-slate-800 rounded-lg ' type="text" Name="myName" id="name" placeholder="Enter your number"/>
        </div>
        </div>
      </div>
      <div className='lg:w-[70%] flex flex-col md:flex-row sm:space-x-28 '>
      <div>
      {/* <label for="name">Email ID</label> */}
        <div className='pb-3 w-full'>
            <input className=' w-full sm:w-48 h-12 bg-gray-50 border border-slate-800 rounded-lg ' type="email" Name="myemail" id="name" placeholder="Enter your name"/>
        </div>
        </div>
        <div>
        {/* <label for="date">Exprience Since</label> */}
        <div className='pb-3 w-full'>
            <input className='w-full sm:w-48 h-12 border  bg-gray-50 border-slate-800 rounded-lg' type="date" name="mydate" id="date" />
        </div>
      {/* <label for="name">Exprience Since</label>
        <div>
            <input className='w-40 h-8 border-spacing-1 ' type="text" Name="myName" id="name" placeholder="Enter your number"/>
        </div> */}
        </div>
      </div>
      <div>
      <div className='pb-3'>
            {/* <label htmlfor="Specializations">Specializations</label> */}
            </div>
            <select className='w-full h-12 border  bg-gray-50 border-slate-800 rounded-lg' name="Specializations" id="Specializations">
                <option value="#">-Select-</option>
                <option value="#">Software Engineer</option>
                <option value="#">Full Stack Developer</option>
                <option value="#">Web Developer</option>
                <option value="#">Data Analyst</option>
            </select>
        </div>

        <div>
        <div className='pb-3'>
            {/* <label htmlfor="Language">Language</label> */}
            </div>
            <select className='w-full h-12 border  bg-gray-50 border-slate-800 rounded-lg' name="Language" id="Language">
                <option value="#">-Select-</option>
                <option value="#">English</option>
                <option value="#">Hindi</option>
                <option value="#">Bangali</option>
                <option value="#">Punjabi</option>
            </select>
        </div>
        <div className='w-full flex flex-col sm:flex-1 md:flex-row py-8 md:space-x-12'>
            {/* <input className='w-6' type="checkbox" /> */}
            {/* <h1 className='text-gray-600 text-xl pt-2'>RCI</h1> */}
            <input className='w-full mb-3 sm:w-96 h-12 border  bg-gray-50 border-slate-800 rounded-lg' type="text" Name="myName" id="name" placeholder="RCI Registration No."/>
            <input className='w-full mb-3 sm:w-96 h-12 border  bg-gray-50 border-slate-800 rounded-lg' type="text" Name="myName" id="name" placeholder="RCI Registration Date"/>
            <input className='w-full mb-3 sm:w-96 h-12 border text-center  bg-gray-50 border-slate-800 rounded-lg' type="file" Name="myfile" id="file" placeholder="RCI Registration Certificate"/>
            
        </div>

    <div className='w-full flex flex-col md:flex-row md:space-x-14 py-5'>
      <div>
      {/* <label for="name">Aadhar Card Number</label> */}
        <div>
            <input className='w-full mb-3 md:w-96 h-12 border  bg-gray-50 border-slate-800 rounded-lg' type="Number" Name="myNumber" id="Number" placeholder="Enter your Aadhar Number"/>
        </div>
        </div>
        <div>
      {/* <label for="name">Pan Card Number</label> */}
        <div>
            <input className='w-full pb-3 sm:w-96 h-12 border  bg-gray-50 border-slate-800 rounded-lg ' type="Number" Name="myNumber" id="Number" placeholder="Enter your  Pan number"/>
        </div>
        </div>
    </div>
    <div className='flex flex-col md:flex-1 lg:flex-row w-full md:space-x-20 '>
    <div>
      {/* <label for="name">Bank Holder Name</label> */}
        <div>
            <input className=' w-full pb-3 sm:w-64 h-12 border  bg-gray-50 border-slate-800 rounded-lg ' type="text" Name="myName" id="Name" placeholder="Enter your Name"/>
        </div>
        </div>
        <div>
      {/* <label for="name">Account Number</label> */}
        <div>
            <input className='w-full pb-3 sm:w-64 h-12 border  bg-gray-50 border-slate-800 rounded-lg ' type="Number" Name="myNumber" id="Number" placeholder="xxxxxx6679"/>
        </div>
        </div>
        <div>
      {/* <label for="name">IFSC Code</label> */}
        <div>
            <input className= ' w-full pb-3 sm:w-64 h-12 border  bg-gray-50 border-slate-800 rounded-lg ' type="Number" Name="myNumber" id="Number" placeholder="********"/>
        </div>
        </div>
    </div>
    <div className='flex space-x-20 w-full '>
    <div>
      {/* <label for="name">Charges/Min</label> */}
        <div>
            <input className='w-64 pb-3 h-12 border  bg-gray-50 border-slate-800 rounded-lg ' type="text" Name="myName" id="Name" placeholder="₹32"/>
        </div>
        </div>
        <div>
      {/* <label for="name">Share Plateform</label> */}
        <div>
            <input className='w-64 pb-3 h-12 border  bg-gray-50 border-slate-800 rounded-lg ' type="Number" Name="myNumber" id="Number" placeholder="15"/>
        </div>
        </div>
        <div>
      <label for="name">Additional Document</label>
        <div>
            <input className='w-64 h-12 border  bg-gray-50 border-slate-800 rounded-lg ' type="file" Name="myfile" id="file" placeholder="file"/>
        </div>
        </div>
    </div>

    <div className='py-5'>
      <label for="name">About</label>
        <div>
            <input className='w-full h-12 border  bg-gray-50 border-slate-800 rounded-lg' type="text" Name="mytext" id="text" placeholder="Enter your About"/>
        </div>
        </div>
<div className='py-5'>
        <label for="name">Notes</label>
        <div>
            <input className='w-full h-12 border  bg-gray-50 border-slate-800 rounded-lg' type="text" Name="mytext" id="text" placeholder="Enter your Notes"/>
        </div>
        </div>
        <div className='flex justify-end space-x-7 py-5'>
            <button className=' w-28 h-8 rounded-md border bg-gray-100 hover:bg-gray-200 border-gray-700 hover:scale-105'>Cancel</button>
            <button className='w-36 h-8 rounded-md border border-gray-700 bg-red-600 hover:bg-red-700 hover:scale-105'>Add Expert</button>
        </div>
        </Container>


    </div>


  );
}

export default Home
