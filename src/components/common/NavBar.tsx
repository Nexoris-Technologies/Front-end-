import Link from "next/link";

function NavBar() {
 return(
  <section className="bg-[#080C12] h-[7rem] rounded-bl-2xl rounded-br-2xl">
  <section className="container mx-auto flex justify-between items-center">
  <div>
   <Link href="http://nexoristech.com/">
   <img src="/Logo.png" alt="Logo" className="h-[7.5rem] w-[16rem]"/>
   </Link>
  </div>

   <nav className="flex items-center gap-6 text-white text-[1rem] font-[500]">
    <a href="http://nexoristech.com/" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-full ">Home</a>
    <a href="http://nexoristech.com/services" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-full ">Servivces</a>
    <a href="http://nexoristech.com/" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-full ">About Us</a>
    <a href="/blog" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-full ">Blog</a>
    <a href="http://nexoristech.com/contact-us" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-full ">Contact</a>
   </nav>

   <div className="">
   <Link href="/get-a-quote">
    <button className="bg-[#543CDA] py-3 px-8 rounded-md text-white">
     Get a Quote
    </button>
    </Link>
   </div>
  </section>
  </section>
 );
};

export default NavBar;