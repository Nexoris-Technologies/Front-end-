import Image from "next/image";

export default function Startup() {
  return (
    <section
      id="why-startups"
      aria-labelledby="why-startups-heading"
      className="w-full py-12 bg-background px-4"
    >
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2
          id="why-startups-heading"
          className="text-[1.8rem] font-extrabold tracking-tight"
        >
          Why Startups and Scale-Ups Stick With Us
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            role="group"
            aria-labelledby={`card-title-${index}`}
            className="w-full md:max-w-[20rem] h-[25rem] border-[1.5px] border-primary-purple rounded-xl py-8 px-4 flex flex-col items-center justify-center gap-5 bg-white"
          >
            <div
              className="w-[100px] h-[100px] rounded-full bg-[#543CDA]/10 flex items-center justify-center"
              aria-hidden="true"
            >
              <Image
                src={card.icon}
                alt=""
                width={60}
                height={60}
                className="w-[3rem] h-[3rem]"
              />
            </div>

            <h3
              id={`card-title-${index}`}
              className="text-primary-purple text-2xl font-semibold text-center"
            >
              {card.title}
            </h3>

            <p className="text-[15px] leading-[26px] text-center max-w-[313px] text-gray-800">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const cards = [
  {
    icon: "/Shield-Done.svg",
    title: "From MVP to a Million Users",
    description:
      "We don't just build something that works. We build clean, flexible systems that scale. No brittle code, no dead-ends.",
  },
  {
    icon: "/Time-Square.svg",
    title: "Speed Without the Tech Debt",
    description:
      "You need to move fast but not at the cost of broken architecture or handoff chaos. Our builds are fast, structured, and built to last.",
  },
  {
    icon: "/password.svg",
    title: "Outcomes You Can Feel",
    description:
      "Bounce rates drop. Load times shrink. Conversions rise. Your team gets tools they actually enjoy using.",
  },
  {
    icon: "/Handshake.svg",
    title: "We Don’t Vanish After Launch",
    description:
      "Many dev companies ship and split. We stay. We test, improve, and grow with you like a real partner should.",
  },
  {
    icon: "/Vector.svg",
    title: "Strategy First. Code Second.",
    description:
      "Before we touch a line of code, we ask the tough questions. That’s how you avoid budget burns, endless rewrites, and painful “how did we miss that?” moments.",
  },
];
