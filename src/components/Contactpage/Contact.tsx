"use client";
import Image from "next/image";
import Button from "../Button/Button";
import { useForm, FieldErrors } from "react-hook-form";
import { SuccessNotifier, ErrorNotifier } from "@/common/Notify";
import { DevTool } from "@hookform/devtools";
import { useState, useEffect } from "react";
import Link from "next/link";

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  _subject: string;
  message: string;
  terms: boolean;
  _captcha: string;
  _next: string; // URL to redirect after form submission
};
function Contact() {
  const [targetEmail, setTargetEmail] = useState<string>("");
  const form = useForm<FormValues>({
    defaultValues: async () => {
      //can make api call right before setting default values or set default values using an api
      return {
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        _subject: "",
        message: "",
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
    <section className="">
      {/* Housing all.. Contact Us and the forms */}
      <div className=" flex flex-col py-6 lg:px-6">
        {/* housing the Contact us */}
        <div className="rounded-[10px] bg-[#543CDA] py-2 md:py-5 w-full ">
          <h3 className="text-white  md:text-[18px] lg:text-[56px] font-bold text-center ">
            Contact Us
          </h3>
        </div>

        {/* Housing the Get in touch, the p-tag, the cards and the button */}
        <div className="flex flex-col gap-[60px]">
          {/* Housing Get in touch and the paragraph text */}
          <div className="flex flex-col mx-auto mt-3 md:mt-8">
            <div className="">
              <h3 className="text-[24px] md:text-[40px] text-center font-bold leading-[32px] md:leading-[48px]">
                Get in Touch with Nexoris Technologies
              </h3>
            </div>
            <div className="">
              <p className="text-[16px] md:text-[18px] max-w-6xl text-center mt-3">
                At Nexoris, we work with ambitious companies around the world to
                design, build, and scale digital solutions that make an impact.
                Whether you&apos;re launching a new product, modernizing legacy
                infrastructure, or building your next big idea, our team is
                ready.
              </p>
            </div>
          </div>

          {/* Let’s Talk & Quick Message Section */}
          <div className="md:mb-[5rem] mb-[2rem]  flex flex-col lg:flex-row gap-[24px] px-4">
            {/* Let’s Talk */}
            <div className="flex-1 rounded-[16px] md:h-[514px] order-2  md:order-1 border border-[#D9D9D9] bg-[#D9D9D9]/4 p-6 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] md:text-[32px] font-semibold text-[#000000]">
                  Let&apos;s Talk
                </h3>
                <p className="text-[16px] text-[#000000]">
                  Have a challenge worth solving? Let&apos;s explore it
                  together.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <Image src="/Email.svg" alt="Email" width={40} height={40} />
                  <div>
                    <h5 className="text-[18px] font-medium">Email Us</h5>
                    <p className="text-[16px]">hello@nexoristech.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Image src="/Call.svg" alt="Call" width={40} height={40} />
                  <div>
                    <h5 className="text-[18px] font-medium">Phone</h5>
                    <p className="text-[16px]">+234 (0) 9138133224</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <Image
                    src="/Location.svg"
                    alt="Location"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h5 className="text-[18px] font-medium">Office Address</h5>
                    <p className="text-[16px]">Lekki, Lagos, Nigeria</p>
                    <p className="text-[14px]">
                      (Remote-first, serving clients globally)
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <Image src="/Clock.svg" alt="Clock" width={40} height={40} />
                  <div>
                    <h5 className="text-[18px] font-medium">Business Hours</h5>
                    <p className="text-[16px]">Monday - Friday</p>
                    <p className="text-[14px]">
                      Timezone-friendly scheduling available worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="flex-1 rounded-[16px] h-[700px] order-1 md:order-1 border border-[#D9D9D9] bg-[#D9D9D9]/4 p-6 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] md:text-[32px] font-semibold text-[#000000]">
                  Quick Message
                </h3>
                <p className="text-[16px] text-[#000000]">
                  Tell us what you&apos;re working on. A dedicated member of our
                  team will respond within one business day.
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSub, onError)}
                noValidate
                action={`https://formsubmit.co/${targetEmail}`}
                method="POST"
              >
                {/* Inputs */}
                <div className="flex flex-col gap-4">
                  {/* First & Last Name */}
                  <div className="flex flex-col md:flex-row gap-4 ">
                    <div className="flex-1 flex flex-col gap-2">
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
                      <label htmlFor="First Name">
                        {typeof errors.firstname?.message !== "undefined"
                          ? `${errors.firstname?.message}`
                          : `First Name`}
                      </label>
                      <input
                        id="First Name"
                        type="text"
                        className="border border-[#8F9092]/40 px-3 py-2 rounded focus:outline-none cursor-pointer"
                        {...register("firstname", {
                          required: {
                            value: true,
                            message: "First Name is required",
                          },
                          pattern: {
                            value: /[a-zA-z]{3,}/,
                            message:
                              "enter 3 characters or more and only aphabets",
                          },
                          validate: {
                            firstNameLength: (fieldValue) =>
                              fieldValue.length >= 3 ||
                              "First Name must be at least 3 character long",
                          },
                        })}
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <label htmlFor="Last Name">
                        {typeof errors.lastname?.message !== "undefined"
                          ? `${errors.lastname?.message}`
                          : `Last Name`}
                      </label>
                      <input
                        id="Last Name"
                        type="text"
                        className="border border-[#8F9092]/40 px-3 py-2 rounded focus:outline-none cursor-pointer"
                        required
                        {...register("lastname", {
                          disabled: watch("firstname") === "",
                          required: {
                            value: true,
                            message: "Last Name is required",
                          },
                          pattern: {
                            value: /[a-zA-z]{3,}/,
                            message:
                              "enter 3 characters or more and only aphabets",
                          },
                          validate: {
                            lastNameLength: (fieldValue) =>
                              fieldValue.length >= 3 ||
                              "Last Name must be at least 3 character long",
                          },
                        })}
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 flex flex-col gap-2">
                      <label htmlFor="Email">
                        {typeof errors.email?.message !== "undefined"
                          ? `${errors.email?.message}`
                          : `Email`}
                      </label>
                      <input
                        id="Email"
                        type="email"
                        className="border border-[#8F9092]/40 px-3 py-2 rounded focus:outline-none cursor-pointer"
                        {...register("email", {
                          disabled: watch("lastname") === "",
                          required: {
                            value: true,
                            message: "Email is required",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: " invalid email address",
                          },
                        })}
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <label>
                        {typeof errors.phonenumber?.message !== "undefined"
                          ? `${errors.phonenumber?.message}`
                          : `Phone Number`}
                      </label>
                      <input
                        type="text"
                        placeholder="+234"
                        className="border border-[#8F9092]/40 px-3 py-2 rounded focus:outline-none cursor-pointer"
                        {...register(`phonenumber`, {
                          disabled: watch("email") === "",
                          valueAsNumber: true,
                          required: {
                            value: true,
                            message: "phone number is required",
                          },
                        })}
                      />
                    </div>
                  </div>

                  {/* Subject Select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Select Subject">
                      {typeof errors._subject?.message !== "undefined" ||
                      watch("_subject") === "Select a subject"
                        ? `${errors._subject?.message}`
                        : `Select Subject`}
                    </label>
                    <div className="relative ">
                      <select
                        id="Select Subject"
                        className="focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40px] w-full border-[#879092]/40 border-[1px] rounded-[5px] px-[1rem] appearance-none cursor-pointer"
                        {...register("_subject", {
                          disabled: watch("phonenumber") === "",
                          required: {
                            value: true,
                            message: "Please select a subject",
                          },
                        })}
                      >
                        <option
                          className="cursor-pointer"
                          value="none"
                          selected
                          disabled
                        >
                          Select a subject
                        </option>
                        <option
                          className="cursor-pointer"
                          value="Web Development"
                        >
                          Web Development
                        </option>
                        <option
                          className="cursor-pointer"
                          value="UI/UX Design & Consulting"
                        >
                          UI/UX Design & Consulting
                        </option>
                        <option
                          className="cursor-pointer"
                          value="Custom Software Solutions"
                        >
                          Custom Software Solutions
                        </option>
                        <option
                          className="cursor-pointer"
                          value="Mobile App Development"
                        >
                          Mobile App Development
                        </option>
                        <option
                          className="cursor-pointer"
                          value="SEO & Content Marketing"
                        >
                          SEO & Content Marketing
                        </option>
                        <option
                          className="cursor-pointer"
                          value="Product Design and Management "
                        >
                          Product Design and Management{" "}
                        </option>
                        <option className="cursor-pointer" value="Others">
                          Others
                        </option>
                      </select>
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] md:w-[24px] md:h-[24px] pointer-events-none  cursor-pointer">
                        <Image
                          src="/chevron-down.svg"
                          alt="arrow down"
                          width={24}
                          height={24}
                        />
                      </span>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-2 cursor-pointer">
                    <label htmlFor="Message">
                      {" "}
                      Message
                      {/* {typeof errors.message?.message !== "undefined"
                        ? `${errors.message?.message}`
                        : `Message`} */}
                    </label>
                    <textarea
                      id="Message"
                      placeholder="Please describe what you need in detail"
                      className="w-full border border-[#8F9092]/40 px-3 py-2 rounded focus:outline-none cursor-pointer"
                      {...register("message", {
                        disabled: watch("_subject") === "",
                        required: {
                          value: true,
                          message: "Please enter a message",
                        },
                      })}
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 cursor-pointer"
                      {...register("terms", {
                        disabled: watch("message") === "",
                        required: {
                          value: true,
                          message: "Please accept the Terms and Condition",
                        },
                      })}
                    />
                    <label className="text-sm font-normal">
                      {typeof errors.terms?.message !== "undefined"
                        ? `${errors.terms?.message}`
                        : `I agree to Nexoris Technolgy storing and processing my personal data for the purpose of responding to my enquiry, Read our`}
                      <Link
                        href="/privacy-policy"
                        className={`text-primary-blue underline underline-offset-4 decoration-primary-blue ml-1`}
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  {/* Button */}
                  <div className="mt-[1rem] w-[300px] mx-auto lg:mx-0  md:mt-[2rem] cursor-pointer">
                    <Button
                      className="bg-[#543CDA] text-white font-bold text-[16px] px-6 py-3 md:py-3 md:px-8 rounded lg:w-[250px] md:w-[200px] cursor-pointer"
                      type="submit"
                      disabled={!isDirty || !isValid || isSubmitting}
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <DevTool control={control} />
    </section>
  );
}

export default Contact;
