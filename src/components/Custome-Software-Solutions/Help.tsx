"use client";

import { GoDotFill } from "react-icons/go";

const helpItems = [
  "Operations teams drowning in spreadsheets and manual workflows",
  "Mid-sized businesses with fragmented tools and disconnected systems",
  "Product owners struggling with rigid off-the-shelf software",
  "CEOs ready to digitize core processes and create a competitive edge",
  "CTOs looking for a trusted build partner to execute a custom vision",
];

export default function Help() {
  return (
    <div className="bg-background py-12 px-6 text-purple-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Who We Help</h2>
        <ul className="space-y-1 text-base text-purple-dark">
          {helpItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <GoDotFill className="text-primary-purple mt-1 shrink-0" size={22} />
              <span className="font-poppins">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
