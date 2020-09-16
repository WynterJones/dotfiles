// ----
// Dependencies
import React, { Component } from 'react';


// Images
import logoWhite from '../theme/images/logo-white.png';
import logoIcon from '../theme/images/logo-icon.png';


// ----
// Sidebar Class Component
class Sidebar extends Component {

    render() {
        return (
            <div id="sidebar-wrapper">
                <div id="sidebar">
                    <div id="sidebar-inner">
                        <div id="sidebar-top-nav">
                            <div id="logo-lg">
                                <img 
                                    src={ logoWhite } 
                                    alt="Marketlify Logo" 
                                />
                            </div>
            
                            <div id="logo-sm" className="hidden">
                                <img 
                                    src={ logoIcon } 
                                    alt="Marketlify Logo"
                                />
                            </div>
            
                            <nav>
                                <a 
                                    href="/dashboard" 
                                    className="sidebar-link sidebar-link__active"
                                >
                                    <svg 
                                        aria-hidden="true" 
                                        focusable="false"  
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 576 512" 
                                        className="inline"
                                    >
                                        <path 
                                            fill="currentColor" 
                                            d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm212.27 400H75.73C57.56 397.63 48 359.12 48 320 48 187.66 155.66 80 288 80s240 107.66 240 240c0 39.12-9.56 77.63-27.73 112zM359.59 137.23c-12.72-4.23-26.16 2.62-30.38 15.17l-45.34 136.01C250.49 290.58 224 318.06 224 352c0 11.72 3.38 22.55 8.88 32h110.25c5.5-9.45 8.88-20.28 8.88-32 0-19.45-8.86-36.66-22.55-48.4l45.34-136.01c4.17-12.57-2.64-26.17-15.21-30.36z" 
                                        ></path>
                                    </svg>
                        
                                    <span>
                                        Dashboard
                                    </span>
                                </a>
                    
                                <a 
                                    href="/websites" 
                                    className="sidebar-link sidebar-link__active"
                                >
                                    <svg 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 512 512" 
                                        className="inline"
                                    >
                                        <path 
                                            fill="currentColor" 
                                            d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM32 80c0-8.8 7.2-16 16-16h48v64H32V80zm448 352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160h448v272zm0-304H128V64h336c8.8 0 16 7.2 16 16v48z" 
                                        ></path>
                                    </svg>
                        
                                    <span>
                                        Websites
                                    </span>
                                </a>
                    
                                <a 
                                    href="/templates" 
                                    className="sidebar-link sidebar-link__active"
                                >
                                    <svg 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 384 512" 
                                        className="inline"
                                    >
                                        <path 
                                            fill="currentColor" 
                                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z" 
                                        ></path>
                                    </svg>
                        
                                    <span>
                                        Templates
                                    </span>
                                </a>
                    
                                <a 
                                    href="/teams" 
                                    className="sidebar-link sidebar-link__active"
                                >
                                    <svg 
                                        aria-hidden="true" 
                                        focusable="false"  
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 640 512" 
                                        className="inline"
                                    >
                                        <path 
                                            fill="currentColor" 
                                            d="M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-112c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-112c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm396.4 210.9c-27.5-40.8-80.7-56-127.8-41.7-14.2 4.3-29.1 6.7-44.7 6.7s-30.5-2.4-44.7-6.7c-47.1-14.3-100.3.8-127.8 41.7-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c.2-23.8-7-45.9-19.4-64.3zM464 432H176v-44.8c0-36.4 29.2-66.2 65.4-67.2 25.5 10.6 51.9 16 78.6 16 26.7 0 53.1-5.4 78.6-16 36.2 1 65.4 30.7 65.4 67.2V432zm92-176h-24c-17.3 0-33.4 5.3-46.8 14.3 13.4 10.1 25.2 22.2 34.4 36.2 3.9-1.4 8-2.5 12.3-2.5h24c19.8 0 36 16.2 36 36 0 13.2 10.8 24 24 24s24-10.8 24-24c.1-46.3-37.6-84-83.9-84zm-236 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-176c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM154.8 270.3c-13.4-9-29.5-14.3-46.8-14.3H84c-46.3 0-84 37.7-84 84 0 13.2 10.8 24 24 24s24-10.8 24-24c0-19.8 16.2-36 36-36h24c4.4 0 8.5 1.1 12.3 2.5 9.3-14 21.1-26.1 34.5-36.2z" 
                                        ></path>
                                    </svg>
                        
                                    <span>
                                        Teams
                                    </span>
                                </a>
                    
                                <a 
                                    href="/account" 
                                    className="sidebar-link sidebar-link__active"
                                >
                                    <svg 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 448 512" 
                                        className="inline"
                                    >
                                        <path 
                                            fill="currentColor" 
                                            d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                                        ></path>
                                    </svg>
                        
                                    <span>
                                        Account
                                    </span>
                                </a>
                    
                                <span 
                                    id="collapse-sidebar" 
                                    className="flex row"
                                >
                                    <svg 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 512 512" 
                                        className="inline mr-2"
                                        id="collapse-lg-icon"
                                    >
                                        <path 
                                            fill="currentColor" 
                                            d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm189.1 129.9L123.7 264.5c-4.7-4.7-4.7-12.3 0-17l121.4-121.4c4.7-4.7 12.3-4.7 17 0l19.6 19.6c4.8 4.8 4.7 12.5-.2 17.2L211.2 230H372c6.6 0 12 5.4 12 12v28c0 6.6-5.4 12-12 12H211.2l70.3 67.1c4.9 4.7 5 12.4.2 17.2l-19.6 19.6c-4.7 4.7-12.3 4.7-17 0z" 
                                        ></path>
                                    </svg>
                    
                                    <svg 
                                        aria-hidden="true" 
                                        focusable="false"  
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 512 512" 
                                        className="inline"
                                        id="collapse-sm-icon"
                                    >
                                        <path 
                                            fill="currentColor" 
                                            d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zM266.9 126.1l121.4 121.4c4.7 4.7 4.7 12.3 0 17L266.9 385.9c-4.7 4.7-12.3 4.7-17 0l-19.6-19.6c-4.8-4.8-4.7-12.5.2-17.2l70.3-67.1H140c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h160.8l-70.3-67.1c-4.9-4.7-5-12.4-.2-17.2l19.6-19.6c4.7-4.7 12.3-4.7 17 0z" 
                                        ></path>
                                    </svg>
                        
                                    <span>
                                        Collapse Sidebar
                                    </span>
                                </span>
                            </nav>
            
                            <div 
                                id="sidebar-footer" 
                                className="p-6 text-gray-400"
                            >
                                <div>
                                <p className="text-xs">
                                    © 2020 Marketlify. <br /> All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
            
                    <div id="sidebar-user">
                        <a 
                            className="flex-shrink-0 w-full group block" 
                            rel="nofollow" 
                            data-method="delete" 
                            href="/logout"
                        >
                            <div className="flex items-center">
                                <div>
                                    <img 
                                        className="inline-block w-6 rounded-full" 
                                        src="https://secure.gravatar.com/avatar/59235f35e4763abb0b547bd093562f6e.png?r=PG" 
                                        alt="User Avatar"
                                    />
                                </div>
                    
                                <div 
                                    id="sidebar-user-info" 
                                    className="ml-3"
                                >
                                    <p className="text-sm leading-5 font-medium text-gray-300">
                                        admin
                                    </p>
                    
                                    <p className="text-xs leading-4 text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                        <strong>person name</strong> ~ Logout
                                    </p>
                                </div>
                            </div>
                        </a>      
                    </div>
                </div>
            </div>
        </div>
    )};
}


// Export ASidebar  component
export default Sidebar;
