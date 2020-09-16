// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// Utilities
import history from '../utils/history';


// Images
import logo from '../theme/images/logo.png';
import loginbg from '../theme/images/login-bg.jpg';


// ----
// Login class Biew-Component
class Login extends Component {
    constructor( props ) {
        super( props );
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }


    componentDidMount() {
        this.props.setTitle( 'Log into your account' );
    }


    // Handle change of input values
    handleChange( event, property ) {
        this.setState({ [property]: event.target.value });
    }


    // Handle form submission
    async handleSubmit( event ) {
        event.preventDefault();

        const res = await this.props.loginUser( this.state );

        if ( res.message === 'success' ) {
            this.props.getCurrentUser();

            alert( '**TEMP** You successfully logged into your accunt and are being redirected to your dashbaord' );

            history.push( '/dashboard' );
        } else {
            console.error( 'There was an issue logging in with the provided credentials.' );
        }
    }


    // Render
    render() {
        return (
            <div className="min-h-screen bg-white flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-24 xl:px-32">
                    <div 
                        className="mx-auto w-full max-w-sm" 
                        style={{ width: "380px"}}
                    >
                        <div>
                            <img 
                                style={{ width: "260px"}} 
                                className="mb-4" 
                                src={ logo } 
                                alt="Marketlify Logo"
                            />
    
                            <p className="mt-2 text-sm leading-5 text-gray-600 max-w">
                                Get instant access, <a href="/create-account" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">create a free account</a>
                            </p>
                        </div>
    
                        <div className="mt-8">
                            <div className="mt-6">
                                <form 
                                    className="new_user" 
                                    id="new_user" 
                                    acceptCharset="UTF-8" 
                                    onSubmit={ this.handleSubmit }
                                >
                                    <input 
                                        type="hidden" 
                                        name="authenticity_token" 
                                        value="+zqcfAuJXK4cJDbb913OXkhzfG0yYoDKIpWN5DD1jVwvLV6UbSC7p3CN6sJhXvdEX3BpP84ly5AcR3Y5VOu7ZA==" 
                                    />
        
                                    <div className="mb-4">
                                        <label 
                                            htmlFor="email"
                                            className="flex justify-between block font-medium text-gray-600"
                                        >
                                            <span>
                                                Username or Email
                                            </span>
                                        </label>
        
                                        <div className="mt-2 relative rounded-md shadow-sm bg-gray-200">
                                            <input 
                                                name="email"
                                                type="email"
                                                v-model="userEmail" 
                                                required="required" 
                                                autoComplete="off"  
                                                className="form-input block w-full p-3 pr-10 sm:leading-5" 
                                                onChange={( event ) => this.handleChange( event, 'email' ) }
                                            />
        
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <svg 
                                                    aria-hidden="true" 
                                                    focusable="false" 
                                                    data-prefix="far" 
                                                    data-icon="user" 
                                                    role="img" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 448 512" 
                                                    className="svg-inline--fa fa-user fa-w-14 fa-5x"
                                                >
                                                    <path 
                                                        fill="currentColor" 
                                                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" 
                                                        className=""
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="mb-4">
                                        <label 
                                            htmlFor="password"
                                            className="flex justify-between block font-medium text-gray-600"
                                        >
                                            <span>
                                                Password
                                            </span>
                                        </label>
        
                                        <div className="mt-2 relative rounded-md shadow-sm bg-gray-200">
                                            <input 
                                                type="password" 
                                                name="password" 
                                                v-model="userPassword"
                                                required="required" 
                                                autoComplete="off" 
                                                className="form-input block w-full p-3 bg-grey-100 pr-10 sm:leading-5" 
                                                onChange={( event ) => this.handleChange( event, 'password' ) }
                                            />
        
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <svg 
                                                    aria-hidden="true" 
                                                    focusable="false" 
                                                    data-prefix="far" 
                                                    data-icon="unlock" 
                                                    role="img" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 448 512" 
                                                    className="svg-inline--fa fa-unlock fa-w-14 fa-5x"
                                                >
                                                    <path 
                                                        fill="currentColor" 
                                                        d="M400 240H128v-94.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v24c0 13.3 10.7 24 24 24s24-10.7 24-24v-22.6C368 65.8 304 .2 224.3 0 144.8-.2 80 64.5 80 144v96H48c-26.5 0-48 21.5-48 48v176c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V288c0-26.5-21.5-48-48-48zm0 224H48V288h352v176z" 
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input 
                                                name="user[remember_me]" 
                                                type="hidden" 
                                                value="0" 
                                            />
        
                                            <input 
                                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" 
                                                type="checkbox" 
                                                value="1" 
                                                name="userRememberMe" 
                                                v-model="userRememberMe"
                                                id="user_remember_me" 
                                            />
        
                                            <label 
                                                htmlFor="remember_me" 
                                                className="ml-2 block text-sm leading-5 text-gray-900"
                                            >
                                                Remember me
                                            </label>
                                        </div>
        
                                        <div className="text-sm leading-5">
                                            <a 
                                                href="/password/new" 
                                                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"  
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>
        
                                    <div className="mt-6">
                                        <span className="block w-full rounded-md shadow-sm">
                                            <button 
                                                type="submit" 
                                                className="w-full btn primary large"
                                            >
                                                Sign In
                                            </button>
                                        </span>
                                    </div>
                                </form>        
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="lg:block relative w-0 flex-1">
                    <img 
                        className="absolute inset-0 h-full w-full object-cover" 
                        src={ loginbg } 
                        alt="Background" 
                    />
                </div>
            </div>
        );
    }
} 




// ----
// Map State To Props
function mapStateToProps() {
    return {};
}


// ----
// Connect and Export Login view Component
export default connect( mapStateToProps, actions )( Login );
