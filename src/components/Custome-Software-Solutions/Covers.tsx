"use client";

import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

export default function CustomCoverService() {
  return (
    <div className="bg-[#EAE8F7] py-16 w-full px-4 md:px-6 lg:px-12 xl:px-20">
      <div className="container mx-auto flex flex-col gap-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center">
          What This Service Covers
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 – Systems */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[#543CDA]">
              ⚙️ Systems We Build
            </h3>
            <ul className="flex flex-col gap-x-4 gap-y-1 text-gray-800 text-base leading-relaxed">
              <li className="flex items-start gap-2">
                <CircleCheckBig className="text-primary-purple" />
                Custom Internal Tools & Admin Panels
              </li>
              <li className="flex items-start gap-2">
               <CircleCheckBig className="text-primary-purple"/>
                Client Portals & Partner Dashboards
              </li>
              <li className="flex items-start gap-2">
               <CircleCheckBig className="text-primary-purple"/>
                Multi-Tenant SaaS Platforms
              </li>
            </ul>
          </div>

          {/* Column 2 – Data & Automation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[#543CDA]">
              📊 Data & Automation
            </h3>
            <ul className="flex flex-col gap-x-4 gap-y-1 text-gray-800 text-base leading-relaxed">
              <li className="flex items-start gap-2">
                <CircleCheckBig className="text-primary-purple" />
                Business Process Automation Systems
              </li>
              <li className="flex items-start gap-2">
                <CircleCheckBig className="text-primary-purple" />
                Smart System Workflows & Data Connectivity
              </li>
              <li className="flex items-start gap-2">
                <CircleCheckBig className="text-primary-purple" />
                Data Modeling, Storage & Reporting
              </li>
            </ul>
          </div>

          {/* Column 3 – Control & Security */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[#543CDA]">
              🔐 Control & Architecture
            </h3>
            <ul className="flex flex-col gap-x-4 gap-y-1 text-gray-800 text-base leading-relaxed">
              <li className="flex items-start gap-2">
                <CircleCheckBig className="text-primary-purple"/>
                Role-Based Access & Security Protocols
              </li>
              <li className="flex items-start gap-2">
                <CircleCheckBig className="text-primary-purple" />
                Custom CMS & Back Office Tools
              </li>
              <li className="flex items-start gap-2">
                <CircleCheckBig className="text-primary-purple" />
                Code Audits, Architecture & DevOps Setup
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
