import React, { useState } from 'react'
// import { IconName } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import KeyOffRoundedIcon from '@mui/icons-material/KeyOffRounded';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { InputAdornment } from '@mui/material';
import { Box } from '@mui/system';





function Home() {

  const[inputval,setInterval]=useState();
  const[inputval1,setInput1]=useState();
  const[allData,setallData]=useState();

console.log(inputval)
console.log(inputval1)
const handleSubmit =()=>{
 setallData({inputval,inputval1})

    console.log("first")
}
 console.log(allData)
  return (
    <>
  

<div class="w-auto max-w-xs text-center text-white mt-16 align-middle mx-auto  ">
        <form class="bg-white shadow-md rounded px-8  pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Email"></label>
        <TextField placeholder="Email" onChange={(e)=>{setInput1(e.target.value)}} InputProps={{
            startAdornment: (
          <InputAdornment position="start">
           <EmailIcon />
          </InputAdornment>
          ),
        }}
        variant="outlined" />
          </div> 
          <div class="mb-6">
          
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password"></label>
        <TextField placeholder="Password" onChange={(e)=>{setInterval(e.target.value)}}  InputProps={{
             startAdornment: (
            <InputAdornment position="start">
              <KeyOffRoundedIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"/>
          </div>
          
          <input className=" text-black pl-40" type="text" value="Forget password"/>
        </form> 
</div> 
 <br></br>
      <div  className="text-center">
         <button onClick={handleSubmit} className=' bg-red-600  text-center w-72 h-10'>LOGIN</button>
      </div>

   <Box>
    {allData?.inputval1}
    {allData?.inputval}
   </Box>
    </>
  )
}

export default Home;







// import React, { useState } from 'react'
// // import { IconName } from "react-icons/fa";
// import { Outlet, Link } from "react-router-dom";
// import EmailIcon from '@mui/icons-material/Email';
// import KeyOffRoundedIcon from '@mui/icons-material/KeyOffRounded';
// import TextField from '@mui/material/TextField';
// import Input from '@mui/material/Input';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { InputAdornment } from '@mui/material';
// function Home() {

//   const[inputval,setVal]=useState();
//   const onChange= ()=> {
//     console.log(inputval)
//   }

//   // const[inputval,newchangeval]=useState();
//   // const onChange =(event)=>{
//   //   const newvalue= event.target.value;
//   //   newchangeval(newvalue)
//   //   console.log(newchangeval);
//   // }
//   return (
//     <>
  
//     {/* <div className='text-red-600'> */}
//     {/* <h1 className="text-center font-bold text-4xl text-black">Welcome to <span className=" text-red-600">App</span>  </h1> */}
//     {/* </div> */}
//     {/* <p className=" text-center  px-36  pt-10 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quod perspiciatis odio molestias impedit  in? Eligendi vero, maiores quod perspiciatis odio molestias labore delectus nihil sequi consequuntur?</p> */}


//     {/* <div >
//     <form  className="text-center pt-20  ">
//   <label >
//     Email:
//     <input   type="text" placeholder='Email' name="Email" />
//   </label>
//   <br></br>
//   <br></br>
//   Password
//   <input   type="password" placeholder='password' value="password" />


//   <br></br>
//   <br></br>
//   <input className="text-blue-500 pl-60" type="text" value="Forget password"/>


// </form>

// <br>

// </br>
// <br></br>
// <br></br>
// <div  className="text-center">
// <button className='  bg-red-600 text-center w-72'>LOGIN</button>
// </div>
//     </div> */}




// <div class="w-auto max-w-xs text-center text-white mt-16 align-middle mx-auto  ">
//         <form class="bg-white shadow-md rounded px-8  pb-8 mb-4">
//           <div class="mb-4">
//             <label class="block text-gray-700 text-sm font-bold mb-2" for="Email"></label>
//         <TextField placeholder="Email" InputProps={{
//             startAdornment: (
//           <InputAdornment position="start">
//            <EmailIcon />
//           </InputAdornment>
//           ),
//         }}
//         variant="outlined" />
//           </div> 
//           <div class="mb-6">
          
//             <label class="block text-gray-700 text-sm font-bold mb-2" for="password"></label>
//         <TextField placeholder="Password" onChange={(e)=>{setInterval(e.target.value)}} value={inputval} InputProps={{
//              startAdornment: (
//             <InputAdornment position="start">
//               <KeyOffRoundedIcon />
//             </InputAdornment>
//           ),
//         }}
//         variant="outlined"/>
//                {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
//           </div>
//           {/* <div class="flex items-center justify-between">
//               <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
//                 Forgot Password?
//               </a>
           
//           </div> */}
//           <input className=" text-black pl-40" type="text" value="Forget password"/>
//         </form> 
// </div> 
//  <br></br>
//       <div  className="text-center">
//          <button className=' bg-red-600  text-center w-72 h-10'>LOGIN</button>
//       </div>

   
//     </>
//   )
// }

// export default Home