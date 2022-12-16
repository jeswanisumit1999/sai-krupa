import React from 'react'

export default function AboutHome() {
  return (
    <div>
      <div className="mb-10 bg-white">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl py-8 md:py-14">About Us</h2>
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 rounded">
                        <img className="rounded-lg" src="https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=600" alt="aboutimg" loading="lazy" width="" height="" />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        {/* <span className="text-xl text-gray-900 font-bold md:text-4xl">SAI KRUPA</span> */}
                        <p className="mt-6 text-gray-600 md:text-2xl"><b className="font-bold">SAI KRUPA AGRO INDUSTRIES</b> was set up with an idea of connecting the farmers with the practice of organic farming so that agriculture becomes economically- viable for them and the society is benefitted by the healthy (GMO free) organic products. For making this possible we are directly connected to thousands of farmers and encouraging them to follow techniques such as crop rotation, green manure, comp ost, and biological pest control. So far this has been a successful journey and we are able to procure, process and market the organic products that meet the globally accepted quality standards</p>
                        <a href="/" className="underline text-blue-500"> Read more...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
