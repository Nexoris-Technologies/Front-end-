"use client";
import Image from "next/image";
import { DevTool } from "@hookform/devtools";
import { useState, useEffect } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { SuccessNotifier, ErrorNotifier } from "@/common/Notify";
import Link from "next/link";

type FormValues = {
  fullname: string;
  budgetrange: string;
  solution: string;
  companyname: string;
  timezone: string;
  timeline: string;
  email: string;
  _subject: string;
  description: string;
  terms: boolean;
  _captcha: string;
  _next: string; // URL to redirect after form submission
};

export default function Needs() {
  const [targetEmail, setTargetEmail] = useState<string>("");
  const form = useForm<FormValues>({
    defaultValues: async () => {
      //can make api call right before setting default values or set default values using an api
      return {
        fullname: "",
        budgetrange: "",
        solution: "",
        companyname: "",
        timezone: "",
        timeline: "",
        email: "",
        _subject: "",
        description: "",
        terms: false,
        _captcha: "false", // this is to disable the default captcha that comes with formsubmit.co
        _next:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000/thank-you"
            : "https://nexoristech.com/thank-you",
      };
    },
  });
  const { handleSubmit, control, register, formState, watch, reset } = form;
  const { errors, isSubmitSuccessful, isSubmitting, isDirty, isValid } =
    formState;

  useEffect(() => {
    setTargetEmail(
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
        "nexoristechnologiesltd@gmail.com"
    );
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSub = async (data: FormValues) => {
    SuccessNotifier("Email sent");
  };
  const onError = (errors: FieldErrors<FormValues>) => {
    ErrorNotifier(`${errors}`);
  };
  return (
    <section className="bg-[#EAE8F7] lg:py-16 ">
      {/* hOUSING ALL  */}
      <div className=" container mx-auto px-4">
        {/* Housing Tell us what you need and the paragraph text */}
        <div className="flex flex-col justify-center items-center h-[343px] gap-[24px] md:gap-[32px]">
          <h3 className="text-[24px] md:text-[40px] font-bold mt-[4rem]">
            Tell Us What You Need
          </h3>
          <p className="text-[18px] text-center max-w-[700px]">
            Fill out the short form below, and a Nexoris strategist will respond
            within 1–2 business days.No pressure. Just clear, human answers from
            a Nexoris expert. You bring the vision. We&apos;ll bring the code,
            clarity, and commitment.
          </p>
        </div>

        {/* Housing quote request form section */}
        <form
          onSubmit={handleSubmit(onSub, onError)}
          noValidate
          action={`https://formsubmit.co/${targetEmail}`}
          method="POST"
        >
          <div className="flex flex-col gap-[32px]  lg:mt-[4rem] rounded-[16px] p-[24px] bg-[#FFFFFF] max-w-[728px] mx-auto w-full">
            <div>
              <h3 className="font-semibold text-[32px] ">Quote Request Form</h3>
            </div>
            {/* Housing the form */}
            <div className="flex flex-col gap-[24px]  ">
              <input
                type="hidden"
                {...register("_captcha", {
                  required: {
                    value: true,
                    message: "Captcha disabled",
                  },
                })}
              />
              <input
                type="hidden"
                {...register("_next", {
                  required: {
                    value: true,
                    message: "ThankYou Page",
                  },
                })}
              />
              {/* Housing both the fullname and the email */}
              <div className="flex flex-col md:flex-row gap-[24px]">
                {/* Housing the full name */}
                <div className="flex flex-col gap-[8px] flex-1">
                  <label htmlFor="Full name" className="text-[16px] ">
                    {typeof errors.fullname?.message !== "undefined"
                      ? `${errors.fullname?.message}`
                      : `Full Name`}
                  </label>
                  <input
                    id="Full name"
                    type="text"
                    className="focus:outline-none  h-[40px]  w-full  border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                    required
                    {...register("fullname", {
                      required: {
                        value: true,
                        message: "Full Name is required",
                      },
                      pattern: {
                        value: /[a-zA-z]{3,}/,
                        message: "enter 3 characters or more and only aphabets",
                      },
                      validate: {
                        fullNameLength: (fieldValue) =>
                          fieldValue.length >= 3 ||
                          "Full Name must be at least 3 character long",
                      },
                    })}
                  />
                </div>
                {/* Housing the email */}
                <div className="flex flex-col gap-[8px] flex-1">
                  <label htmlFor="Email" className="text-[16px] ">
                    {typeof errors.email?.message !== "undefined"
                      ? `${errors.email?.message}`
                      : `Email`}
                  </label>
                  <input
                    id="Email"
                    type="email"
                    className="focus:outline-none  h-[40px]  w-full   border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem]"
                    required
                    {...register("email", {
                      disabled: watch("fullname") === "",
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid Email",
                      },
                    })}
                  />
                </div>
              </div>

              {/* Housing company name */}
              <div className="flex flex-col gap-[8px] ">
                <label htmlFor="Company name" className="text-[16px] ">
                  {typeof errors.companyname?.message !== "undefined"
                    ? `${errors.companyname?.message}`
                    : `Company Name`}
                </label>
                <input
                  id="Company name"
                  type="text"
                  className="focus:outline-none  h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] "
                  required
                  {...register("companyname", {
                    disabled: watch("email") === "",
                    required: {
                      value: true,
                      message: "Company Name is required",
                    },
                    pattern: {
                      value: /[a-zA-z]{3,}/,
                      message: "enter 3 characters or more and only aphabets",
                    },
                    validate: {
                      companyNameLength: (fieldValue) =>
                        fieldValue.length >= 3 ||
                        "Company Name must be at least 3 character long",
                    },
                  })}
                />
              </div>

              {/* select a solution */}
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="Solution" className="text-[16px] ">
                  {typeof errors.solution?.message !== "undefined"
                    ? `${errors.solution?.message}`
                    : `What solution are you exploring today?`}
                </label>
                <div className="relative">
                  <select
                    {...register("solution", {
                      disabled: watch("companyname") === "",
                      required: {
                        value: true,
                        message: "Solution is required",
                      },
                    })}
                    id="Solution"
                    className="focus:outline-none  h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] appearance-none"
                  >
                    <option value="none" selected disabled>
                      Select a solution
                    </option>
                    <option value="Core Web Development Solutions">
                      Core Web Development Solutions
                    </option>
                    <option value="Modern Frontend & Backend Solutions">
                      Modern Frontend & Backend Solutions
                    </option>
                    <option value="Performance and Growth Solutions">
                      Performance and Growth Solutions
                    </option>
                    <option value="Security & Compliance">
                      Security & Compliance
                    </option>
                    <option value="Hosting and DevOps">
                      Hosting and DevOps
                    </option>
                    <option value="Others">Others</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px] pointer-events-none">
                    <Image
                      src="/chevron-down.svg"
                      alt="arrow down"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>

              {/* Budget range & Preferred Timeline */}
              <div className="flex flex-col md:flex-row gap-[24px]">
                {/* Housing the Budget Range */}
                <div className="flex flex-col gap-[8px] flex-1">
                  <label htmlFor="Budget Range" className="text-[16px] ">
                    Budget Range (Optional)
                  </label>
                  <div className="relative">
                    <input
                      id="Budget Range"
                      {...register("budgetrange")}
                      type="text"
                      className="h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] appearance-none truncate overflow-hidden whitespace-nowrap focus:outline-none "
                    />
                  </div>
                </div>
                {/* Housing the preferred Timeline */}
                <div className="flex flex-col gap-[8px] flex-1">
                  <label htmlFor="Preferred Timeline" className="text-[16px] ">
                    {typeof errors.timeline?.message !== "undefined" ||
                    watch("timeline") === "Select Timeline"
                      ? `${errors.timeline?.message}`
                      : `Preferred Timeline`}
                  </label>
                  <div className="relative">
                    <select
                      {...register("timeline", {
                        disabled: watch("solution") === "",
                        required: {
                          value: true,
                          message: "Time Line is required",
                        },
                      })}
                      id="Preferred Timeline"
                      className="h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] appearance-none truncate overflow-hidden whitespace-nowrap focus:outline-none "
                    >
                      <option value="none" selected disabled>
                        Select Timeline
                      </option>
                      <option value="Asap">Asap (1 - 2 weeks)</option>
                      <option value="Short Term">
                        Short Term (2 - 4 weeks)
                      </option>
                      <option value="Standard">Standard (1 - 2 months)</option>
                      <option value="Long Term">
                        Long Term (2 - 4 months)
                      </option>
                      <option value="Flexible / Not sure">
                        Flexible / Not sure
                      </option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px] pointer-events-none">
                      <Image
                        src="/chevron-down.svg"
                        alt="arrow down"
                        width={24}
                        height={24}
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Time zone */}
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="Time Zone" className="text-[16px] ">
                  {typeof errors.timezone?.message !== "undefined" ||
                  watch("timezone") === "Select your Time zone"
                    ? `${errors.timezone?.message}`
                    : `Timezone`}
                </label>
                <div className="relative">
                  <select
                    {...register("timezone", {
                      disabled: watch("timeline") === "",
                      required: {
                        value: true,
                        message: "TimeZone is required",
                      },
                    })}
                    id="Time Zone"
                    className="h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] appearance-none truncate overflow-hidden whitespace-nowrap focus:outline-none "
                  >
                    <option value="none" selected disabled>
                      Select your Time zone
                    </option>
                    <option value="-12:00">
                      (GMT-12:00) International Date Line West
                    </option>
                    <option value="-11:00">
                      (GMT-11:00) Midway Island, Samoa
                    </option>
                    <option value="-10:00">(GMT-10:00) Hawaii</option>
                    <option value="-09:00">(GMT-09:00) Alaska</option>
                    <option value="-08:00">
                      (GMT-08:00) Pacific Time (US & Canada)
                    </option>
                    <option value="-07:00">
                      (GMT-07:00) Mountain Time (US & Canada)
                    </option>
                    <option value="-06:00">
                      (GMT-06:00) Central Time (US & Canada), Mexico City
                    </option>
                    <option value="-05:00">
                      (GMT-05:00) Eastern Time (US & Canada), Bogota, Lima
                    </option>
                    <option value="-04:00">
                      (GMT-04:00) Atlantic Time (Canada), Caracas
                    </option>
                    <option value="-03:00">
                      (GMT-03:00) Buenos Aires, Greenland
                    </option>
                    <option value="-02:00">(GMT-02:00) Mid-Atlantic</option>
                    <option value="-01:00">
                      (GMT-01:00) Azores, Cape Verde Is.
                    </option>
                    <option value="+00:00">
                      (GMT+00:00) London, Lisbon, Casablanca
                    </option>
                    <option value="+01:00">
                      (GMT+01:00) Berlin, Rome, Paris, Madrid
                    </option>
                    <option value="+02:00">
                      (GMT+02:00) Athens, Jerusalem, Cairo
                    </option>
                    <option value="+03:00">
                      (GMT+03:00) Nairobi, Moscow, Baghdad
                    </option>
                    <option value="+03:30">(GMT+03:30) Tehran</option>
                    <option value="+04:00">(GMT+04:00) Dubai, Baku</option>
                    <option value="+04:30">(GMT+04:30) Kabul</option>
                    <option value="+05:00">
                      (GMT+05:00) Islamabad, Karachi
                    </option>
                    <option value="+05:30">
                      (GMT+05:30) India Standard Time (Mumbai, Delhi)
                    </option>
                    <option value="+06:00">(GMT+06:00) Almaty, Dhaka</option>
                    <option value="+07:00">(GMT+07:00) Bangkok, Jakarta</option>
                    <option value="+08:00">
                      (GMT+08:00) Beijing, Perth, Singapore
                    </option>
                    <option value="+09:00">(GMT+09:00) Tokyo, Seoul</option>
                    <option value="+09:30">(GMT+09:30) Adelaide, Darwin</option>
                    <option value="+10:00">(GMT+10:00) Sydney, Guam</option>
                    <option value="+11:00">
                      (GMT+11:00) Magadan, Solomon Is.
                    </option>
                    <option value="+12:00">(GMT+12:00) Auckland, Fiji</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px] pointer-events-none">
                    <Image
                      src="/chevron-down.svg"
                      alt="arrow down"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>

              {/* Product description and checkbox */}
              <div className="flex flex-col gap-2">
                <label htmlFor="Message">
                  Message
                  {/* {typeof errors.description?.message !== "undefined" ||
                  watch("description") === ""
                    ? `${errors.description?.message}`
                    : `Product Description / Goals`} */}
                </label>
                <textarea
                  {...register("description", {
                    disabled: watch("timezone") === "",
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                  })}
                  placeholder="Please describe what you need in detail"
                  className="w-full border border-[#8F9092]/40 px-3 h-[60px] md:h-[120px] py-2 rounded focus:outline-none "
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  className="mt-1 w-[24px] h-[24px]"
                  {...register("terms", {
                    required: {
                      value: true,
                      message: "Please accept the Terms and Condition",
                    },
                  })}
                />
                <label className="text-sm font-normal tracking-wide">
                  {typeof errors.terms?.message !== "undefined"
                    ? `${errors.terms?.message}`
                    : `I agree to Nexoris Technolgy storing and processing my personal data for the purpose of responding to my enquiry, Read our`}
                  <Link
                    href="/privacy-policy"
                    className={`text-primary-blue underline underline-offset-4 decoration-primary-blue ml-1 `}
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Button */}
              <div className="  flex justify-center items-center">
                <button
                  type="submit"
                  disabled={!isDirty || !isValid || isSubmitting}
                  className="bg-[#543CDA] text-white font-bold text-[16px] px-6 py-3 md:py-4 md:px-10 rounded mt-3  flex items-center gap-4"
                >
                  Submit Quote Request{" "}
                  <span>
                    <Image
                      src="/Arrow right.svg"
                      alt="arrow right"
                      width={16}
                      height={16}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>

        {/*Housing  Not just a quote */}
        <div className="mt-[5rem] flex flex-col py-5 justify-center items-center gap-[1rem]">
          <h3 className="text-[20px] md:text-[32px] font-semibold text-center">
            Not Just a Quote, But a Smarter Beninning
          </h3>
          <p className="text-[16px] md:text-[18px] font-extralight text-center md:max-w-[620px]">
            At Nexoris, we don&apos;t just price projects, we help shape them.
            From the first message to final deployment, we work as your
            strategic technology partner.
          </p>
          <p className="text-[14px] md:text-[18px] font-extralight text-center md:max-w-[620px] tracking-tight">
            Let&apos;s turn ambition into architecture, clearly, confidently,
            and fast.
          </p>
        </div>
      </div>
      <DevTool control={control} />
    </section>
  );
}
