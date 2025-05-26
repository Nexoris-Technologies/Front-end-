function Newsletter() {
  return (
    <section className="container mx-auto bg-[#EAE8F7] flex flex-col lg:flex-row lg:justify-center items-center gap-12 sm:gap-20 py-12 sm:py-20 px-4 rounded-2xl my-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#543CDA] font-extrabold text-xl sm:text-2xl">
          Subscribe To Our <br className="hidden sm:block" /> Newsletter
        </h1>
        <p className="text-sm sm:text-base">Stay in touch with our latest insights</p>
      </div>

      <form action="" className="w-full max-w-2xl flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="bg-white w-full rounded-xl sm:rounded-l-xl sm:rounded-r-none py-4 px-4 sm:px-8 outline-none"
        />
        <input
          type="submit"
          name="submit"
          value="Subscribe"
          className="bg-[#543CDA] text-white rounded-xl sm:rounded-r-xl sm:rounded-l-none py-4 px-4 sm:px-8 cursor-pointer"
        />
      </form>
    </section>
  );
}

export default Newsletter;
