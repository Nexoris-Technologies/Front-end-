import Image from "next/image";

function Glance() {
 return(
  <section className="container mx-auto flex flex-col items-center gap-8 py-28">
   <div className="bg-[#543CDA33] w-15 h-15 rounded-2xl flex items-center justify-center">
   <Image src="/solar_pallete-2-linear.svg" alt="Solar Pallete" width={40} height={40} />
   </div>
   <h1 className="font-bold text-3xl">Key Benefits at a Glance</h1>

   <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

    <div className="shadow-xl p-8 flex flex-col gap-8">
     <div className="flex items-center justify-between">
      <h3 className="font-bold text-4xl">1</h3>
      <div className="flex items-center gap-3">
      <Image src="/Ellipse 40.svg" alt="Ellipse 40" width={20} height={20} />
      <Image src="/Ellipse 41.svg" alt="Ellipse 40" width={20} height={20} />
      <Image src="/Ellipse 42.svg" alt="Ellipse 40" width={20} height={20} />
      </div>
     </div>
     <p className="">
     Clarity in Every Click: Information architecture that removes friction and improves flow.
     </p>
    </div>

    <div className="shadow-xl p-8 flex flex-col gap-8">
     <div className="flex items-center justify-between">
      <h3 className="font-bold text-4xl">2</h3>
      <div className="flex items-center gap-3">
      <Image src="/Ellipse 40.svg" alt="Ellipse 40" width={20} height={20} />
      <Image src="/Ellipse 41.svg" alt="Ellipse 40" width={20} height={20} />
      <Image src="/Ellipse 42.svg" alt="Ellipse 40" width={20} height={20} />
      </div>
     </div>
     <p className="">
     User-First, Always: Every screen starts with empathy and ends with measurable outcomes.
     </p>
    </div>

    <div className="shadow-xl p-8 flex flex-col gap-8">
     <div className="flex items-center justify-between">
      <h3 className="font-bold text-4xl">3</h3>
      <div className="flex items-center gap-3">
      <Image src="/Ellipse 40.svg" alt="Ellipse 40" width={20} height={20} />
      <Image src="/Ellipse 41.svg" alt="Ellipse 40" width={20} height={20} />
      <Image src="/Ellipse 42.svg" alt="Ellipse 40" width={20} height={20} />
      </div>
     </div>
     <p className="">
     Design Systems That Scale: We build reusable, modular components for long-term consistency.
     </p>
    </div>

    <div className="shadow-xl p-8 flex flex-col gap-8">
     <div className="flex items-center justify-between">
      <h3 className="font-bold text-4xl">4</h3>
      <div className="flex items-center gap-3">
      <Image src="/Ellipse 40.svg" alt="Ellipse 40" width={20} height={20} />
      <Image src="/Ellipse 41.svg" alt="Ellipse 40" width={20} height={20} />
      <Image src="/Ellipse 42.svg" alt="Ellipse 40" width={20} height={20} />
      </div>
     </div>
     <p className="">
     Conversion-Centered Thinking: UI aligned with how users behave and how businesses grow.
     </p>
    </div>
   </div>
  </section>
 );
};

export default Glance;