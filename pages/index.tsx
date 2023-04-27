// import Image from 'next/image'
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
//   function addClick() {
//     setCount(count + 1);
//   }

//   function removeClick() {
//     if (count > 0) setCount(count - 1);
//   }

//   const [count, setCount] = useState(0);

//   return (
//     // add style to div in center and also add button to add and remove in row
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         flexDirection: "column",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "50px",
//         }}
//       >
//         {" "}
//         Counts : {count}
//       </h1>

//       <div className="flex flex-row">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-500 h-50 m-4 flex-grow"
//           onClick={addClick}
//         >
//           ADD
//         </button>

//         <button
//           onClick={removeClick}
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-500 h-50 m-4 flex-grow"
//         >
//           Remove
//         </button>
//       </div>

//       {/* {<FormCp></FormCp>}
      
//       */}


// {/* create form in container and colum  */}
//      <div className="justify-center container">
//       <form action="email">

//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" />

//       <label htmlFor="password">Password:</label>
//       <input type="password" id="password" name="password" />
//       </form>
//      </div>
//     </div>
  // );


  
  return (
    


<div className="flex bg bg-yellow-400 justify-center overflow-auto min-h-screen flex-col items-center" > 

<div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full m-300">
 <input className="m-2 col-start-auto bg-slate-800 p-4" color="black" type="Email" />

 
  

  <input className="m-2 col-start-auto bg-slate-800 p-4" type="password" color="black"/>

  <button className="bg-red-400  p-4 m-2"> Submit </button>

</div>
</div>


  )
}

// function FormCp() {
//   return (
//     <div className="flex flex-col">
//       <form action="/send-data-here" method="post">
//         <label htmlFor="first">First name:</label>
//         <input type="text" id="first" name="first" />
//         <label htmlFor="last">Last name:</label>
//         <input type="text" id="last" name="last" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
