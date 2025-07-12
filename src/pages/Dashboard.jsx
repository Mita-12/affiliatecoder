import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ActivityPage from "../components/Activity";
import GraphSection from "./Graph";
import { GiClick } from "react-icons/gi";
import {
  MdOutlineAddShoppingCart,
  MdOutlinePersonAddAlt,
  MdSearch,
  MdSettings,
  MdLogout,
  MdAccountCircle
} from "react-icons/md";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { TbCalculator } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid, } from "react-icons/lia";
import { PiMoneyDuotone } from "react-icons/pi";
import { RiArrowDownSLine, } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-50 right-0 h-16 bg-white z-10 flex border-b border-gray-200 items-center justify-between px-6 ">
      {/* Left side - Search and Menu */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-50 lg:hidden">
          <FiMenu className="text-gray-600 text-xl" />
        </button>
      </div>

      {/* Right side - Icons and Profile */}
      <div className="flex items-center space-x-5  ">

        <div className="relative hidden lg:block w-72">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search campaigns, reports..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white focus:border-indigo-300 text-sm transition-all duration-200"
          />
        </div>

        {/* Profile Dropdown */}
        <div className="relative ">
          <button
            className="flex items-center space-x-2 group"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">NH</span>
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm font-medium text-gray-700">Neha
</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            <RiArrowDownSLine className={`text-gray-500 text-lg transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
          </button>



          {/* Profile Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 border border-gray-100">
              
              <Link to="/" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdAccountCircle className="mr-3 text-gray-500 text-lg" />
                ViweProfile
              </Link>
              <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdSettings className="mr-3 text-gray-500 text-lg" />
                UpdateProfile
              </Link>
              <div className="border-t border-gray-100"></div>
              <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdLogout className="mr-3 text-gray-500 text-lg" />
                Log out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex w-full bg-slate-100">
      <Sidebar />

      <div className="ml-64 min-h-screen  text-sm text-gray-800 w-full">
        {/* Dashboard Navbar */}
        <DashboardNavbar />

        <div className="mt-16">

          <div className="py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              {/* Graph Section */}
              <div className="mb-6">
                <GraphSection />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {/* Clicks Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Clicks</span>
                    <div className="p-2 rounded-lg bg-blue-200">
                      <GiClick className="text-blue-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">1</div>
                  <div className="flex items-center b ">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      100%
                    </span>
                    <span className="ml-2 text-xs board-b bo text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Signups Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Signups</span>
                    <div className="p-2 rounded-lg bg-purple-200">
                      <MdOutlinePersonAddAlt className="text-purple-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">0</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Paid Signups Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Paid Signups</span>
                    <div className="p-2 rounded-lg bg-green-200">
                      <MdOutlineAddShoppingCart className="text-green-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">0</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Conversion Rate Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Conversion Rate</span>
                    <div className="p-2 rounded-lg bg-yellow-200">
                      <FaFilterCircleDollar className="text-yellow-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">0%</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Revenue Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Revenue</span>
                    <div className="p-2 rounded-lg bg-red-200">
                      <TbCalculator className="text-red-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$0.00</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Pending Commissions Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Pending Commissions</span>
                    <div className="p-2 rounded-lg bg-indigo-200">
                      <LiaFileInvoiceDollarSolid className="text-indigo-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$0.00</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Paid Commissions Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Paid Commissions</span>
                    <div className="p-2 rounded-lg bg-green-200">
                      <PiMoneyDuotone className="text-green-600 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$0.00</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Earnings Per Click Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Earnings Per Click</span>
                    <div className="p-2 rounded-lg bg-blue-200">
                      <PiMoneyDuotone className="text-blue-600 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$0.00</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Offers Section */}
          <div className="p-6 bg-white mr-6 rounded-xl h-1/2">
            <h2 className="text-2xl font-bold mb-6 text-center">🎉 Current Offers</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">

              {/* Offer Card 1 - Earned */}
              <div className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-5 relative">

                {/* ✅ Badge at top-right corner */}
                <div className="absolute top-2 right-2">
                  <button className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full hover:bg-green-200 transition">
                    ✅ Earned
                  </button>
                </div>

                {/* Card Content */}
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full text-xl">
                    💻
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800">Free Web Template</h4>
                    <p className="text-sm text-gray-500">Top-quality React design assets</p>
                  </div>
                </div>

              </div>


              {/* Offer Card 2 - Earned */}
              <div className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-5 relative">

                {/* ✅ Badge at top-right corner */}
                <div className="absolute top-3 right-3">
                  <span className="inline-block text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    ✅ Earned
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full text-xl">
                    💳
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800">Subscription Discount</h4>
                    <p className="text-sm text-gray-500">Get 30% off Pro plan</p>
                  </div>
                </div>

              </div>


              {/* Offer Card 3 - Not Earned */}
              <div className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-5 opacity-80 relative">

                {/* ⏳ Badge in top-right corner */}
                <div className="absolute top-3 right-3">
                  <span className="inline-block text-xs font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                    ⏳ Earned
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 text-pink-600 p-3 rounded-full text-xl">
                    📢
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-800">Ad Promotion</h4>
                    <p className="text-sm text-gray-500">Feature your product on homepage</p>
                  </div>
                </div>

              </div>


            </div>
          </div>


          {/* Referral Link */}
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-md mr-6 mt-6 transition-all">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Your Referral Network</h3>
              <a href="#" className="text-indigo-600 hover:underline text-sm font-medium">
                Create Custom Link
              </a>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Share your unique referral link and earn commissions for every new merchant that joins through you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300"
                value="https://affiliate.com/ref/johndoe123"
                readOnly
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors">
                Copy Link
              </button>
            </div>
          </div>

          {/* Activity Section */}
          <ActivityPage user={{ name: "Customer" }} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;