import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const locationData = {
        India: {
            'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur'],
            'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra'],
            'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
            'Karnataka': ['Bangalore', 'Mysore', 'Hubli'],
            'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai']
        },
        USA: {
            'California': ['Los Angeles', 'San Francisco', 'San Diego'],
            'Texas': ['Houston', 'Dallas', 'Austin'],
            'New York': ['New York City', 'Buffalo', 'Rochester']
        },
        UK: {
            'England': ['London', 'Manchester', 'Birmingham'],
            'Scotland': ['Edinburgh', 'Glasgow', 'Aberdeen'],
            'Wales': ['Cardiff', 'Swansea', 'Newport']
        }
    };

    const countries = Object.keys(locationData);
    const states = selectedCountry ? Object.keys(locationData[selectedCountry]) : [];
    const cities = selectedCountry && selectedState ? locationData[selectedCountry][selectedState] : [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 transform transition-all duration-300 hover:shadow-2xl">
                <div className="w-full p-8 md:p-12 relative">
                    {showSuccess && (
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-xs bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg text-sm flex items-center shadow-lg z-10 animate-fade-in">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Success! Registration completed.
                        </div>
                    )}

                    <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <div className="relative inline-block mb-6">
                                <div className="absolute -inset-2 bg-blue-200 rounded-full blur opacity-75 animate-pulse"></div>
                                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
                            <p className="text-gray-600">Join our community and start your journey</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-blue-300"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-blue-300"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-blue-300"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-blue-300"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <div>
                                        <select
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-blue-300"
                                            value={selectedCountry}
                                            onChange={(e) => {
                                                setSelectedCountry(e.target.value);
                                                setSelectedState('');
                                            }}
                                            required
                                        >
                                            <option value="">Country</option>
                                            {countries.map((country) => (
                                                <option key={country} value={country}>{country}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <select
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-blue-300"
                                            value={selectedState}
                                            onChange={(e) => setSelectedState(e.target.value)}
                                            disabled={!selectedCountry}
                                            required
                                        >
                                            <option value="">State</option>
                                            {states.map((state) => (
                                                <option key={state} value={state}>{state}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <select
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-blue-300"
                                            disabled={!selectedState}
                                            required
                                        >
                                            <option value="">City</option>
                                            {cities.map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-blue-300"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm hover:border-blue-300"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                                    I agree to the <a href="#" className="text-blue-600 hover:underline font-medium">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-lg font-semibold hover:opacity-95 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Create Account
                            </button>
                        </form>

                        <div className="text-center mt-8">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link to="/login" className="text-blue-600 font-medium hover:underline transition-colors duration-200">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;