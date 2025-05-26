import { CiSearch } from "react-icons/ci";

function SearchInsight() {
 return(
  <section className="container mx-auto py-32 relative">
   <div className="bg-[#543CDA] h-[10rem] flex items-center justify-center rounded-2xl my-12">
    <h1 className="font-[800] text-3xl text-white">Insights</h1>
   </div>

   <div className="absolute bottom-36 left-110">
   <form action="">
   <div className=" flex items-center justify-center bg-white shadow w-[40rem] rounded-2xl text-[#543CDA] font-bold">
     <CiSearch className="w-20 h-8"/>
      <input type="text" name="text" placeholder="Search Insights" className="w-[40rem] rounded-tl-xl rounded-bl-xl py-4 px-8 outline-none"/>
   </div>
     </form>
   </div>
  </section>
 );
};

export default SearchInsight;


// import { CiSearch } from "react-icons/ci";

// function SearchInsight() {
//   return (
//     <section className="container mx-auto py-12 lg:py-32 lg:relative px-4">
//       {/* Header block */}
//       <div className="bg-[#543CDA] h-20 lg:h-40 flex items-center justify-center rounded-2xl my-12">
//         <h1 className="font-extrabold text-xl lg:text-3xl text-white">Insights</h1>
//       </div>

//       {/* Search bar */}
//       <div className="lg:absolute lg:-bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-full lg:max-w-2xl px-4">
//         <form action="">
//           <div className="flex items-center bg-white shadow rounded-2xl text-[#543CDA] font-bold overflow-hidden">
//             <div className="p-4">
//               <CiSearch className="w-6 h-6" />
//             </div>
//             <input
//               type="text"
//               name="text"
//               placeholder="Search Insights"
//               className="w-full py-4 px-4 outline-none text-sm"
//             />
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default SearchInsight;


// import { CiSearch } from "react-icons/ci";

// function SearchInsight() {
//   return (
//     <section className="container mx-auto py-12 px-4">
//       {/* Header block */}
//       <div className="relative bg-[#543CDA] h-20 lg:h-40 flex items-center justify-center rounded-2xl my-12">
//         <h1 className="font-extrabold text-xl lg:text-3xl text-white">Insights</h1>

//         {/* Search bar: position it at the bottom of the header */}
//         <div className="absolute -bottom-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-full lg:max-w-2xl px-4">
//           <form action="">
//             <div className="flex items-center bg-white shadow rounded-2xl text-[#543CDA] font-bold overflow-hidden">
//               <div className="p-4">
//                 <CiSearch className="w-6 h-6" />
//               </div>
//               <input
//                 type="text"
//                 name="text"
//                 placeholder="Search Insights"
//                 className="w-full py-4 px-4 outline-none text-sm"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SearchInsight;
