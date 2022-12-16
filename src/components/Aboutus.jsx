import React from "react";

export default function Aboutus() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-5  object-cover object-center rounded"
          alt="hero"
          src="https://agritech.tnau.ac.in/agricultural_marketing/images/agro/agro-industry.png"
        />
        <div className="lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
            About Us
          </h1>
          <p className="mt-6 text-gray-600 md:text-2xl">
            <b className="font-bold">SAI KRUPA AGRO INDUSTRIES</b> was set up
            with an idea of connecting the farmers with the practice of organic
            farming so that agriculture becomes economically- viable for them
            and the society is benefitted by the healthy (GMO free) organic
            products. For making this possible we are directly connected to
            thousands of farmers and encouraging them to follow techniques such
            as crop rotation, green manure, comp ost, and biological pest
            control. So far this has been a successful journey and we are able
            to procure, process and market the organic products that meet the
            globally accepted quality standards
          </p>
          <div class="p-2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="mt-6 text-gray-600 md:text-2xl">
                We introduce ourselves as leading organic product suppliers of
                Madhya Pradesh. We are engaged in organic farming practices
                since last ten years.
              </span>
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="mt-6 text-gray-600 md:text-2xl">
              Our organic farming projects have been certified by well known certification agencies such as Ecocert , Control Union and APEDA.
              </span>
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="mt-6 text-gray-600 md:text-2xl">
              Our organic farming projects have been certified by well known certification agencies such as Ecocert , Control Union and APEDA.
              </span>
            </div>
          </div>

          <div className="flex justify-center my-10">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
