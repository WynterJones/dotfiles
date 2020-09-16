// ----
// Dependencies
import React, { Component } from 'react';


// ----
// WebsiteCard  class Component
class WebsiteCard extends Component {

    render() {
        return (
            <li className="border-b border-gray-200">
                <a 
                    href="/websites/TEMPLATE_NAME_HERE" 
                    className="block transition duration-150 ease-in-out"
                >
                    <div className=" px-4 py-4 sm:px-6">
                        <div className="flex items-center">
                            <div className="w-3/6">
                                <div className="flex">
                                    <img 
                                        className="h-12 w-15 rounded mr-4" 
                                        src="https://picsum.photos/500/250" 
                                        alt="TEMPLATE DESC HERE"
                                    />   

                                    <div>
                                        <div className="font-medium text-indigo-600 truncate">
                                            TEMPLATE NAME HERE
                                        </div>

                                        <div className="mt-1 flex items-center text-sm leading-5 text-gray-500">
                                            <span className="truncate">
                                                No domain set
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-2/6">
                                <div className="text-sm leading-5 text-gray-500 font-medium">
                                    1 Pages
                                </div>

                                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                    <svg 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 448 512" 
                                        className="inline mr-1"
                                    >
                                        <path 
                                            fill="currentColor" 
                                            d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z" 
                                        ></path>
                                    </svg>

                                    <time 
                                        className="mx-1" 
                                        datetime="2020-09-01 19:19:17 UTC"
                                    >
                                        12 days
                                    </time> 

                                    ago
                                </div>
                            </div>

                            <div className="w-1/6 text-right text-gray-400">
                                <svg 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    role="img" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 320 512" 
                                    className="inline"
                                >
                                    <path 
                                        fill="currentColor" 
                                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" 
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
} 


// Export WebsiteCard component
export default WebsiteCard;
