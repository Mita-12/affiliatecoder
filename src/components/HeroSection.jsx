import React from "react";
import OfferPage from "../pages/OfferPage";

const HeroSection = () => {
  const steps = [
    {
      number: "1",
      title: "Join the program",
      description: "Any developer can become an affiliate. Join by creating your unique referral link.",
    },
    {
      number: "2",
      title: "Promote Coder",
      description: "Share your referral link in your content, tutorials, or with your network.",
    },
    {
      number: "3",
      title: "Earn rewards",
      description: "Earn 25% commission for every paid subscription you refer.",
    },
  ];

  return (
    <section className="w-full overflow-hidden text-white">
      <div className="w-full bg-indigo-600">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center py-16 px-4">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Boost Your Income {" "}
              <span className="text-black">
                with Developer  <span className="text-blue-800">
                Affiliate Program
              </span> 
              </span>
            </h1>
            <p className="text-lg mt-6 mb-8 text-white">
              Promote Coder, earn commissions, and support the developer community. Join our program and get
              <span className="font-semibold"> 25% commission </span>
              for every referral — with no expiration.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-700 text-base font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 transition-all">
                Join Now
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            {/* Affiliate Image Centered at Bottom */}
            <div className="flex justify-center mt-10 ">
              <img
                src="https://t4.ftcdn.net/jpg/01/36/22/27/240_F_136222735_teLp0aY2FXzL4Qaj2Xu4QuHV6aXcW8rG.jpg"
                alt="Affiliate Banner"
                className="rounded-xl h-66"
              />
            </div>
          </div>


        </div>
      </div>

      {/* How It Works */}
      <div className="p-16 ">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-14">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white text-gray-800 shadow-md rounded-2xl p-6 text-center transition hover:shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-900 text-white font-bold rounded-full flex items-center justify-center text-lg shadow-md">
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Tips */}
      <div className=" bg-white text-gray-800 py-20 px-6 md:px-24 rounded-t-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-10">
          How to succeed as a Coder affiliate
        </h2>
        <div className=" p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: "💻", title: "Share in dev communities", desc: "Post about Coder in forums like Dev.to, Reddit, or Stack Overflow.", color: "#7ebb69" },
            { icon: "📝", title: "Write technical articles", desc: "Create tutorials or comparisons featuring Coder on your blog.", color: "#8b98a7" },
            { icon: "📱", title: "Social media posts", desc: "Tweet about your Coder experiences or share on LinkedIn.", color: "#5dbdd6" },
            { icon: "🎥", title: "Create video content", desc: "Make YouTube tutorials or live coding sessions using Coder.", color: "#b3216a" },
            { icon: "👨‍💻", title: "Recommend to colleagues", desc: "Share with your workplace or coding bootcamp students.", color: "#edb883" },
            { icon: "📊", title: "Add to resource lists", desc: "Include Coder in your curated lists of developer tools.", color: "#acb5e4" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white text-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-blue-900">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* Benefits Section */}
      <div className=" text-gray-800 p-8">
        <div className="text-center mb-6">
          <button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
            Start referring
          </button>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Why join the Coder Affiliate Program?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { emoji: "⚡", title: "Top developer platform", desc: "Promote a leading coding environment." },
            { emoji: "💰", title: "High commission", desc: "Earn 25% from every subscription." },
            { emoji: "🛠️", title: "Developer resources", desc: "Get code samples and marketing assets." },
            { emoji: "📊", title: "Real-time tracking", desc: "Monitor your referrals in dashboard." },
          ].map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition">
              <div className="text-4xl text-blue-500 mb-4">{card.emoji}</div>
              <h3 className="font-semibold text-blue-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <OfferPage />
      {/* Removed decorative blobs */}
    </section>
  );
};

export default HeroSection;