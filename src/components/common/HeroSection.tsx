function HeroSection() {
 return(
  <section className="bg-[#EAE8F7]">
   <section className="container mx-auto flex">
   <div className="flex flex-col justify-between">
    <h1 className="font-[800] text-[2rem] leading-[3.44rem] tracking-normal w-[40rem] text-[#08101D]">You Dream it. We Build It <br /> Right. From Day One.</h1>
    <p className="w-[30rem] h-[8rem]">
    You’ve been sketching, pitching, overthinking. Maybe even burned by slow devs or unstable builds. At Nexoris, we don’t just launch MVPs, we build fast, scalable products that are easy to grow, easy to love, and ready for whatever’s next.
    </p>
    <button className="py-5 px-8 bg-[#543CDA] text-white rounded-md w-[18rem] h-[4rem]">
     <a href="#">
      Let's Build Something Great
     </a>
    </button>

    <div className="mt-12">
     <p className="font-[400] text-[1.125rem]">
     Trusted by 50+ fast-growing teams
     </p>
     
     <div className="flex gap-12">
      <div className="">
       <h1 className="font-[600] text-[1.8rem] text-[#543CDA]">3-second</h1>
       <p className="font-[400] text-[0.9rem]">
       Average Load Time
       </p>
      </div>

      <div className="">
       <h1 className="font-[600] text-[1.8rem] text-[#543CDA]">+40%</h1>
       <p className="font-[400] text-[0.9rem]">
       SEO uplift
       </p>
      </div>

      <div className="">
       <h1 className="font-[600] text-[1.8rem] text-[#543CDA]">Zero-crash</h1>
       <p className="font-[400] text-[0.9rem]">
       Mobile apps
       </p>
      </div>
     </div>
    </div>
   </div>

   <div className="flex items-center justify-center">
    <div className="w-96 h-96 bg-[#543CDA45] opacity-25 backdrop-blur-4xl"></div>
    </div>
   </section>
  </section>
 );
};

export default HeroSection; 