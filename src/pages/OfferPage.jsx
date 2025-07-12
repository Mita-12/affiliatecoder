import React from "react";

const OfferPage = () => {
  return (
    <div className="mt-16">
  {/* New Exclusive Offer Heading */}
  <div className="text-center ">
    <h1 className="text-5xl font-bold text-blue-900 ">
      <span className=" bg-clip-text ">Exclusive Offer</span>
    </h1>
    
  </div>
  <div className="py-20 px-6 md:px-24 ">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
      {/* Left Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Monetize</span> Your Developer Influence
          </h1>
          <p className="text-lg text-blue-700 leading-relaxed">
            Join the premier affiliate network for tech creators. Earn generous commissions promoting the tools developers love.
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-4">
          <li className="flex items-start gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Tech-First Community</h3>
              <p className="text-blue-600 text-sm mt-1">Join 25,000+ developers already earning with our platform.</p>
            </div>
          </li>

          <li className="flex items-start gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Higher Conversion Rates</h3>
              <p className="text-blue-600 text-sm mt-1">Our developer-focused offers convert 3-5x better than generic programs.</p>
            </div>
          </li>

          <li className="flex items-start gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Real-Time Analytics</h3>
              <p className="text-blue-600 text-sm mt-1">Track clicks, conversions, and earnings with our developer-friendly dashboard.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Right - Single Hero Image */}
      <div className="relative  h-[350px]  flex items-center justify-center">
        {/* Main hero image with layered effects */}
        <div className="relative w-full h-full max-w-lg">
          {/* Image container with elegant shadow and border */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-[6px] border-b-blue-400">
            <img
              src="https://media.istockphoto.com/id/1346294889/photo/web-designing.jpg?b=1&s=612x612&w=0&k=20&c=9R2L9fQII5RBS3t0Kdq8Rrq7mosalRLAHXEUkYT_tEM="
              alt="Developer working on code"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-blue-500/20"></div>
          </div>


          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-blue-400/10 blur-xl z-0"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-cyan-400/10 blur-xl z-0"></div>
        </div>
      </div>
    </div>
  </div>

  <div className=" py-20 px-6 md:px-24 ">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
      {/* Left - Card Grid */}

      <div className="relative  h-[350px]  flex items-center justify-center">
        {/* Main hero image with layered effects */}
        <div className="relative w-full h-full max-w-lg">
          {/* Image container with elegant shadow and border */}
          <div className="absolute rounded-2xl  border-[6px] border-white">
            <img
              src="https://media.istockphoto.com/id/1218511457/photo/top-view-asian-ux-developer-and-ui-designer-brainstorming-about-mobile-app-interface.jpg?b=1&s=612x612&w=0&k=20&c=O06gnMDYFvsUCdeR68xrtROcDeTYN4yfh8US08uDWKI="
              alt="Developer working on code"
              className="w-full h-full object-cover"
              loading="lazy"
            />
           
          </div>


          {/* Decorative elements */}
          {/* <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-blue-400/10 blur-xl z-0"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-cyan-400/10 blur-xl z-0"></div> */}
        </div>
      </div>
      {/* Right Content */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Monetize</span> Your Tech Audience
        </h1>

        <p className="text-lg text-blue-700 leading-relaxed">
          Earn up to 30% commissions by promoting developer tools, coding courses, and SaaS products to your tech-savvy audience.
        </p>

        {/* Features */}
        <ul className="space-y-4">
          <li className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition border border-blue-100">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800">High Commission Rates</h3>
              <p className="text-blue-600 text-sm mt-1">Earn 20-30% on every sale with our premium developer products.</p>
            </div>
          </li>

          <li className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition border border-blue-100">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800">Developer-Focused Products</h3>
              <p className="text-blue-600 text-sm mt-1">Promote tools and resources that developers actually want to use.</p>
            </div>
          </li>

          <li className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition border border-blue-100">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800">Technical Marketing Assets</h3>
              <p className="text-blue-600 text-sm mt-1">Get code samples, API docs, and technical content to help you promote.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
 <div className="py-20 px-6 md:px-24 ">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
      {/* Left Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Monetize</span> Your Developer Influence
          </h1>
          <p className="text-lg text-blue-700 leading-relaxed">
            Join the premier affiliate network for tech creators. Earn generous commissions promoting the tools developers love.
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-4">
          <li className="flex items-start gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Tech-First Community</h3>
              <p className="text-blue-600 text-sm mt-1">Join 25,000+ developers already earning with our platform.</p>
            </div>
          </li>

          <li className="flex items-start gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Higher Conversion Rates</h3>
              <p className="text-blue-600 text-sm mt-1">Our developer-focused offers convert 3-5x better than generic programs.</p>
            </div>
          </li>

          <li className="flex items-start gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-800">Real-Time Analytics</h3>
              <p className="text-blue-600 text-sm mt-1">Track clicks, conversions, and earnings with our developer-friendly dashboard.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Right - Single Hero Image */}
      <div className="relative  h-[350px]  flex items-center justify-center">
        {/* Main hero image with layered effects */}
        <div className="relative w-full h-full max-w-lg">
          {/* Image container with elegant shadow and border */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-[6px] border-b-blue-400">
            <img
              src="https://media.istockphoto.com/id/1346294889/photo/web-designing.jpg?b=1&s=612x612&w=0&k=20&c=9R2L9fQII5RBS3t0Kdq8Rrq7mosalRLAHXEUkYT_tEM="
              alt="Developer working on code"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-blue-500/20"></div>
          </div>


          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-blue-400/10 blur-xl z-0"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-cyan-400/10 blur-xl z-0"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default OfferPage;