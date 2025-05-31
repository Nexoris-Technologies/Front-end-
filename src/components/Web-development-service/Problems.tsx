function Problems() {
  // Problems list for easy expansion/maintenance
  const problems = [
    "Our website is painfully slow and users are dropping off.",
    "We’re invisible on Google and losing business to competitors.",
    "We need to update content, but every change requires a dev.",
    "Our site breaks on mobile and we’re not sure how to fix it.",
  ];

  return (
    <section className="px-4">
      {/* Main container */}
      <div className="flex flex-col items-center py-20 gap-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <h3 className="font-bold text-2xl md:text-3xl text-center">
          Problems We Solve
        </h3>

        {/* Responsive grid for problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[2rem] ">
          {problems.map((text, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center justify-center border border-gray-300 rounded-md p-2 lg:p-6 lg:w-[36rem] gap-4 bg-white shadow-sm"
            >
              {/* Number circle */}
              <div className="bg-[#0059F133] w-12 h-12 rounded-full flex items-center justify-center">
                <h3 className="text-2xl font-bold">{index + 1}</h3>
              </div>

              {/* Problem text */}
              <p className="text-base text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problems;
