import Image from "next/image";

function Process() {
 return(
  <section className="from-[#543CDA] bg-gradient-to-b">
   <div className="flex flex-col gap-8">
    <h1 className="font-bold text-3xl">
    Our Process
    </h1>

    <div className="flex flex-col">
     <div className="flex">
     <div className="bg-white rounded-2xl p-8">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
       <h1 className="font-bold text-3xl">1</h1>
      </div>
      <h3 className="font-medium text-xl">
      Understand the User
      </h3>
      <p>
       We talk to real users, audit current flows, and find what’s not working.
      </p>
     </div>

      <Image src="/Group 422.svg" alt="Arrow" width={100} height={100} />

     <div className="bg-white rounded-2xl p-8">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
       <h1 className="font-bold text-3xl">2</h1>
      </div>
      <h3 className="font-medium text-xl">
      Understand the User
      </h3>
      <p>
       We talk to real users, audit current flows, and find what’s not working.
      </p>
     </div>
     
     <Image src="/Group 422.svg" alt="Arrow" width={100} height={100} />

     <div className="bg-white rounded-2xl p-8">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
       <h1 className="font-bold text-3xl">3</h1>
      </div>
      <h3 className="font-medium text-xl">
      Understand the User
      </h3>
      <p>
       We talk to real users, audit current flows, and find what’s not working.
      </p>
     </div>
     </div>

     <div className="flex items-end">
     <Image src="/Group 492.svg" alt="Arrow" width={50} height={50} className="text-end"/>
     </div>

     <div className="flex">
     <div className="bg-white rounded-2xl p-8">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
       <h1 className="font-bold text-3xl">4</h1>
      </div>
      <h3 className="font-medium text-xl">
      Understand the User
      </h3>
      <p>
       We talk to real users, audit current flows, and find what’s not working.
      </p>
     </div>

      <Image src="/Group 491.svg" alt="Arrow" width={100} height={100} />

     <div className="bg-white rounded-2xl p-8">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
       <h1 className="font-bold text-3xl">5</h1>
      </div>
      <h3 className="font-medium text-xl">
      Understand the User
      </h3>
      <p>
       We talk to real users, audit current flows, and find what’s not working.
      </p>
     </div>
     
     <Image src="/Group 491.svg" alt="Arrow" width={100} height={100} />

     <div className="bg-white rounded-2xl p-8">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#543CDA33]">
       <h1 className="font-bold text-3xl">6</h1>
      </div>
      <h3 className="font-medium text-xl">
      Understand the User
      </h3>
      <p>
       We talk to real users, audit current flows, and find what’s not working.
      </p>
     </div>
    </div>
     </div>

   </div>
  </section>
 );
};

export default Process;