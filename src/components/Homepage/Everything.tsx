import Image from "next/image";

export default function Everything() {
  return (
    <section className=" container mx-auto flex justify-center items-center mt-[2rem] md:mt-[5rem] lg:mt-[4rem] ">
      {/* Housing all */}
      <div className=" flex flex-col justify-center items-center gap-[2rem] md:gap-[5rem]">
        {/* Housing from the Everything you need and the cards and Not sure what you need */}
        <div className="max-w-[1281px] flex flex-col gap-[4rem] lg:gap-[8rem]  ">
          {/* Everything TEXT */}
          <div className="max-w-[380px] h-[64px] md:max-w-[1280] ">
            <h2 className="font-extrabold text-[22px] md:text-[40px] leading-[32px] md:leading-[55px] tracking-tighter text-center">
              Everything You Need to Launch, Grow, and Stay Ahead
            </h2>
          </div>

          {/* Housing of the cards */}
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14rem] md:gap-[2rem] mt-[14rem] md:mt-[4rem] lg:mt-[3rem] px-3">
            {/* First card */}
            <div className=" w-[348px]  md:w-[370px]  h-[230px] relative md:h-[500px]  rounded-[10px] flex flex-col justify-center items-center border-[2px] border-[#543CDA] gap-[14px] md:gap-[25px]">
              <div className="absolute top-[-87%] md:top-[-2%] w-[350px] md:w-[370px]">
                <Image
                  src="/firstcard.webp"
                  alt="first-card"
                  width={390}
                  height={235}
                  className="rounded-[10px]  "
                />
              </div>
              {/* Housing the web development, paragraph and learn more */}
              <div className="w-[348px] md:w-[380px] h-auto  flex flex-col justify-center items-center  absolute  bottom-[40px]">
                {/* housing the web development and the paragraph text */}
                <div className="w-[348px] h-[174px] flex flex-col justify-center items-center  gap-[15px]">
                  {/* Housing the Web development */}
                  <div className="w-[312px] h-auto md:w-[348px] md:h-[35px] flex md:block">
                    <h3 className="font-semibold text-[16px] md:text-[25px] leading-[25px] md:leading-[35px] tracking-wide text-center text-[#543CDA]">
                      Web Development
                    </h3>
                  </div>
                  {/* Housing the paragraph */}
                  <div className="w-[312px] h-auto md:w-[348px] md:h-[124px]">
                    <p className="text-[11px] md:text-[18px] leading-[20px] md:leading-[32px] tracking-wide text-left md:text-center">
                      High-performance websites that look sharp, load fast, and
                      scale effortlessly as you grow.
                    </p>
                  </div>
                </div>

                {/* Housing the learn more and the arrow right */}
                <div className="w-[312px] h-auto md:w-[380px] md:h-[37px] flex md:justify-center items-center gap-[8px]">
                  {/* Still housing both from the design */}
                  <div className="w-[111px] h-[26px] flex justify-center items-center gap-[8px]">
                    {/* Housing the learn more */}
                    <div className="w-[84px] h-auto  md:w-[79px] md:h-[26px]">
                      <h5 className="text-[16px] md:text-[15px] leading-[26px]  underline decoration-solid decoration-2">
                        Learn More
                      </h5>
                    </div>

                    {/* The arrow right icon */}
                    <Image
                      src="/icon.svg"
                      alt="Arrow"
                      width={7.12}
                      height={11.41}
                      className="md:w-[7.12px] md:h-[11.41px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* second card */}
            <div className="w-[348px] h-[230px] md:w-[370px] relative md:h-[500px] rounded-[10px] flex flex-col justify-center items-center border-[2px] border-[#543CDA] md:gap-[25px]">
              <div className="absolute top-[-87%] md:top-[-2%] w-[350px] md:w-[370px]">
                <Image
                  src="/secondcard.webp"
                  alt="first-card"
                  width={390}
                  height={235}
                  className="rounded-[10px]  "
                />
              </div>
              {/* Housing the web development, paragraph and learn more */}
              <div className="w-[380px]  flex flex-col justify-center items-center gap-[40px] md:gap-[5px]  absolute  bottom-[40px]">
                {/* housing the web development and the paragraph text */}
                <div className="w-[338px] md:w-[348px] h-auto md:h-[174px] flex flex-col justify-center items-center gap-[5px] md:gap-[15px]">
                  {/* Housing the Mobile app development */}
                  <div className="w-[312px] h-auto md:w-[276px] md:h-[70px] flex md:block">
                    <h3 className="font-semibold text-[16px] md:text-[25px] leading-[25px] md:leading-[35px] tracking-wide text-center text-[#543CDA]">
                      Mobile App Development
                    </h3>
                  </div>
                  {/* Housing the paragraph */}
                  <div className="w-[312px] h-autp md:w-[349px] md:h-[124px]">
                    <p className="text-[11px] md:text-[18px] leading-[20px] md:leading-[32px] tracking-wide text-left md:text-center">
                      Cross-platform apps with smooth UX, fast performance, and
                      the reliability your users expect.
                    </p>
                  </div>
                </div>

                {/* Housing the learn more and the arrow right */}
                <div className=" w-[312px] h-auto md:w-[380px] md:h-[37px] flex md:justify-center items-center gap-[8px]">
                  {/* Still housing both from the design */}
                  <div className="w-[111px] h-[26px] flex justify-center items-center gap-[8px]">
                    {/* Housing the learn more */}
                    <div className=" w-[84px]  md:w-[79px] h-[26px]">
                      <h5 className="text-[16px] md:text-[15px] leading-[26px]  underline decoration-solid decoration-2">
                        Learn More
                      </h5>
                    </div>

                    {/* The arrow right icon */}
                    <Image
                      src="/icon.svg"
                      alt="Arrow"
                      width={7.12}
                      height={11.41}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Third card */}
            <div className="w-[348px] h-[230px] md:w-[370px] relative md:h-[500px] rounded-[10px] flex flex-col justify-center items-center border-[2px] border-[#543CDA] gap-[14px] md:gap-[25px]">
              <div className="absolute top-[-87%] md:top-[-2%] w-[350px] md:w-[370px]">
                <Image
                  src="/thirdcard.webp"
                  alt="first-card"
                  width={390}
                  height={235}
                  className="rounded-[10px]  "
                />
              </div>
              {/* Housing the web development, paragraph and learn more */}
              <div className="w-[348px] h-auto md:w-[380px]  flex flex-col justify-center items-center gap-[40px] md:gap-[5px]  absolute  bottom-[40px]">
                {/* housing the UI text and the paragraph text */}
                <div className=" w-[338px] h-auto md:w-[348px] md:h-[174px] flex flex-col justify-center  items-center gap-[8px] md:gap-[15px]">
                  {/* Housing the UI text */}
                  <div className="w-[312px] h-auto md:w-[276px] md:h-[70px]">
                    <h3 className="font-semibold text-[18px] md:text-[25px] leading-[25px] md:leading-[35px] tracking-wide md:text-center text-[#543CDA]">
                      UI/UX Design & Consulting
                    </h3>
                  </div>
                  {/* Housing the paragraph */}
                  <div className="w-[312px] h-auto md:w-[348px] md:h-[124px]">
                    <p className="text-[11px] md:text-[18px] leading-[20px] md:leading-[32px] tracking-wide text-center">
                      Interfaces your users actually enjoy. Designed with
                      empathy, built with precision, backed by research.
                    </p>
                  </div>
                </div>

                {/* Housing the learn more and the arrow right */}
                <div className="w-[312px] flex md:justify-center items-center gap-[8px]">
                  {/* Still housing both from the design */}
                  <div className="w-[111px] flex justify-center items-center gap-[8px]">
                    {/* Housing the learn more */}
                    <div className="w-[79px] ]">
                      <h5 className="text-[15px] leading-[26px]  underline decoration-solid decoration-2">
                        Learn More
                      </h5>
                    </div>

                    {/* The arrow right icon */}
                    <Image
                      src="/icon.svg"
                      alt="Arrow"
                      width={7.12}
                      height={11.41}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* fouth card */}
            <div className="w-[348px] h-[230px] md:w-[370px] relative md:h-[500px] rounded-[10px] flex flex-col justify-center items-center border-[2px] border-[#543CDA] gap-[14px] md:gap-[25px]">
              <div className="absolute top-[-87%] md:top-[-2%] w-[350px] md:w-[370px]">
                <Image
                  src="/fourth card.webp"
                  alt="first-card"
                  width={390}
                  height={235}
                  className="rounded-[10px]  "
                />
              </div>
              {/* Housing the web development, paragraph and learn more */}
              <div className="w-[348px] h-auto md:w-[380px]  flex flex-col justify-center items-center gap-[40px] md:gap-[5px]  absolute  bottom-[40px]">
                {/* housing the UI text and the paragraph text */}
                <div className=" w-[338px] h-auto md:w-[348px] md:h-[174px] flex flex-col justify-center  items-center gap-[8px] md:gap-[15px]">
                  {/* Housing the UI text */}
                  <div className="w-[312px] h-auto md:w-[276px] md:h-[70px]">
                    <h3 className="font-semibold text-[18px] md:text-[25px] leading-[25px] md:leading-[35px] tracking-wide md:text-center text-[#543CDA]">
                      SEO & Content Marketing
                    </h3>
                  </div>
                  {/* Housing the paragraph */}
                  <div className="w-[312px] h-auto md:w-[348px] md:h-[124px]">
                    <p className="text-[11px] md:text-[18px] leading-[20px] md:leading-[32px] tracking-wide text-center">
                      Visibility that lasts. We create search-first strategies
                      that bring in the right traffic and turn it into results
                    </p>
                  </div>
                </div>

                {/* Housing the learn more and the arrow right */}
                <div className="w-[312px] h-[37px] flex md:justify-center items-center gap-[8px]">
                  {/* Still housing both from the design */}
                  <div className="w-[111px]  flex justify-center items-center gap-[8px]">
                    {/* Housing the learn more */}
                    <div className="w-[79px] ">
                      <h5 className="text-[15px] leading-[26px]  underline decoration-solid decoration-2">
                        Learn More
                      </h5>
                    </div>

                    {/* The arrow right icon */}
                    <Image
                      src="/icon.svg"
                      alt="Arrow"
                      width={7.12}
                      height={11.41}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* fifth card */}
            <div className="w-[348px] h-[230px] md:w-[370px] relative md:h-[500px] rounded-[10px] flex flex-col justify-center items-center border-[2px] border-[#543CDA] gap-[14px] md:gap-[25px]">
              <div className="absolute top-[-87%] md:top-[-2%] w-[350px] md:w-[370px]">
                <Image
                  src="/fifth card.webp"
                  alt="first-card"
                  width={390}
                  height={235}
                  className="rounded-[10px]  "
                />
              </div>
              {/* Housing the web development, paragraph and learn more */}
              <div className="w-[348px] h-auto md:w-[380px]  flex flex-col justify-center items-center gap-[40px] md:gap-[5px]  absolute  bottom-[40px]">
                {/* housing the UI text and the paragraph text */}
                <div className=" w-[338px] h-auto md:w-[348px] md:h-[174px] flex flex-col justify-center  items-center gap-[8px] md:gap-[15px]">
                  {/* Housing the UI text */}
                  <div className="w-[312px] h-auto md:w-[276px] md:h-[70px]">
                    <h3 className="font-semibold text-[18px] md:text-[25px] leading-[25px] md:leading-[35px] tracking-wide  md:text-center text-[#543CDA]">
                      Custome Software Solutions
                    </h3>
                  </div>
                  {/* Housing the paragraph */}
                  <div className="w-[312px] h-auto md:w-[348px] md:h-[124px]">
                    <p className="text-[11px] md:text-[18px] leading-[20px] md:leading-[32px] tracking-wide text-center">
                      Tailored syatems built around your workflows, not
                      templates. Clean, scalable, and built to last.
                    </p>
                  </div>
                </div>

                {/* Housing the learn more and the arrow right */}
                <div className="w-[312px] flex md:justify-center items-center gap-[8px]">
                  {/* Still housing both from the design */}
                  <div className="w-[111px]  flex justify-center items-center gap-[8px]">
                    {/* Housing the learn more */}
                    <div className="w-[79px]">
                      <h5 className="text-[15px] leading-[26px]  underline decoration-solid decoration-2">
                        Learn More
                      </h5>
                    </div>

                    {/* The arrow right icon */}
                    <Image
                      src="/icon.svg"
                      alt="Arrow"
                      width={7.12}
                      height={11.41}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* sixth card */}
            <div className="w-[348px] h-[230px] md:w-[370px] relative md:h-[500px] rounded-[10px] flex flex-col justify-center items-center border-[2px] border-[#543CDA] gap-[14px] md:gap-[25px]">
              <div className="absolute top-[-87%] md:top-[-2%] w-[350px] md:w-[370px]">
                <Image
                  src="/sixth card.webp"
                  alt="first-card"
                  width={390}
                  height={235}
                  className="rounded-[10px]  "
                />
              </div>
              {/* Housing the web development, paragraph and learn more */}
              <div className="w-[348px] h-auto md:w-[380px]  flex flex-col justify-center items-center gap-[40px] md:gap-[5px]  absolute  bottom-[40px]">
                {/* housing the UI text and the paragraph text */}
                <div className=" w-[338px] h-auto md:w-[348px] md:h-[174px] flex flex-col justify-center  items-center gap-[8px] md:gap-[15px]">
                  {/* Housing the UI text */}
                  <div className="w-[312px] h-auto md:w-[276px] md:h-[70px]">
                    <h3 className="font-semibold text-[18px] md:text-[25px] leading-[25px] md:leading-[35px] tracking-wide md:text-center text-[#543CDA]">
                      Product Design & Management
                    </h3>
                  </div>
                  {/* Housing the paragraph */}
                  <div className="w-[312px] h-auto md:w-[348px] md:h-[124px]">
                    <p className="text-[11px] md:text-[18px] leading-[20px] md:leading-[32px] tracking-wide text-center">
                      From first idea to market-ready launch, we help shape
                      products that make sense and make impact.
                    </p>
                  </div>
                </div>

                {/* Housing the learn more and the arrow right */}
                <div className="w-[312px]  flex md:justify-center items-center gap-[8px]">
                  {/* Still housing both from the design */}
                  <div className="w-[111px] flex justify-center items-center gap-[8px]">
                    {/* Housing the learn more */}
                    <div className="w-[79px] ">
                      <h5 className="text-[15px] leading-[26px]  underline decoration-solid decoration-2">
                        Learn More
                      </h5>
                    </div>

                    {/* The arrow right icon */}
                    <Image
                      src="/icon.svg"
                      alt="Arrow"
                      width={7.12}
                      height={11.41}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NOT SURE WHAT YOU NEED, housing the h-tag and paragraph */}
          <div className=" w-full flex flex-col justify-center items-center gap-[8px] md:gap-[1rem] container mx-auto">
            <div className="   md:max-w-[730px]  ">
              <h3 className="text-[16px] text-center md:text-left md:text-[25px] leading-[25px] md:leading-[35px] tracking-wide font-semibold  text-[#543CDA]">
                Not Sure What You Need?
              </h3>
            </div>
            <div className="max-w-[336] md:max-w-[730px] ">
              <p className="text-[11px] md:text-[18px] leading-[20px] md:leading-[32px] tracking-wide text-center md:text-left ">
                Tell us where you are and where you want to go. We&apos;ll help you
                map the way forward.
              </p>
            </div>
          </div>
        </div>
        {/* Let's talk */}
        <div className="container mx-auto max-w-[390px] w-[207px]  rounded-[8px] border-[2px] py-[12px] md:py-[20px] px-[31px] border-[#543CDA] flex justify-center items-center">
          <div className="w-[77px] h-[26px] ">
            <button className="font-bold text-[12px] md:text-[17px] leading-[100%]  text-[#543CDA]">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
