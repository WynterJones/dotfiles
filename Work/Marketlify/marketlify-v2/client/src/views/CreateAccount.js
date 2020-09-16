// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Utilties
import history from '../utils/history';


// Images
import logo from '../theme/images/logo.png';


// ----
// CreateAccount class View-Component
class CreateAccount extends Component {
  constructor( props ) {
    super( props );

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
    this.state = {};
  }

  componentDidMount() {
    this.props.setTitle( 'Create your new account' );
  }


  // Handle Change of input values
  handleChange( event, property ) {
    this.setState({ [property]: event.target.value });
  }


  // Handle Submit
  async handleSubmit( event ) {
    event.preventDefault();

    if ( this.state.password !== this.state.passwordConfirm ) {
      alert( '**TEMP** Passwords do not match' );
    } else {
      const res = await this.props.registerUser( this.state );

      if ( res.message === 'success' ) {
        alert( '**TEMP** Your account was successfully created. Now being redirected to login' );
        history.push( '/' );
      }
    }
  }


  // Render Component
  render() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img 
            style={{ width: "260px" }} 
            className="mb-4 block mx-auto" 
            src={ logo } 
            alt="Marketlify logo"
          />
    
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create Your Free Account
          </h2>
    
          <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
            Thank you for choosing us
          </p>
        </div>
    
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form 
              className="new_user" 
              id="new_user" 
              acceptCharset="UTF-8" 
              onSubmit={ this.handleSubmit }
            >
              <input 
                type="hidden" 
                name="authenticity_token" 
                value="Nz8GWKsztdhuXbtzA5LIQ+j7qm9Fxacolh9Tcvl0jAtWg+Bat3B0154mUXIa7JB8Cz1uc+RI46ZcYa223XtYUg==" 
              />
    
              <div className="mb-4">
                <label 
                  htmlFor="username"
                  className="flex justify-between block font-medium text-gray-600"
                >
                  <span>
                    Username
                  </span>
                </label>
    
                <div className="mt-2 relative rounded-md shadow-sm">
                  <input 
                    name="username" 
                    required="required" 
                    autoComplete="off"
                    className="form-input block w-full py-2 pl-1 pr-10 sm:leading-5" 
                    onChange={( event ) => this.handleChange( event, 'username' ) } 
                  />
    
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label 
                  htmlFor="firstName"
                  className="flex justify-between block font-medium text-gray-600"
                >
                  <span>
                    First Name
                  </span>
                </label>
    
                <div className="mt-2 relative rounded-md shadow-sm">
                  <input 
                    name="firstName" 
                    required="required" 
                    autoComplete="off"
                    className="form-input block w-full py-2 pl-1 pr-10 sm:leading-5" 
                    onChange={( event ) => this.handleChange( event, 'firstName' ) } 
                  />
    
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
                  </div>
                </div>
              </div>


              <div className="mb-4">
                <label 
                  htmlFor="lastName"
                  className="flex justify-between block font-medium text-gray-600"
                >
                  <span>
                    Last Name
                  </span>
                </label>
    
                <div className="mt-2 relative rounded-md shadow-sm">
                  <input 
                    name="lastName" 
                    required="required" 
                    autoComplete="off"
                    className="form-input block w-full py-2 pl-1 pr-10 sm:leading-5" 
                    onChange={( event ) => this.handleChange( event, 'lastName' ) } 
                  />
    
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
                  </div>
                </div>
              </div>

    
              <div className="mb-4">
                <label 
                  htmlFor="email"
                  className="flex justify-between block font-medium text-gray-600"
                >
                  <span>
                    Email
                  </span>
                </label>
    
                <div className="mt-2 relative rounded-md shadow-sm">
                  <input 
                    name="email" 
                    required="required" 
                    autoComplete="off" 
                    className="form-input block w-full py-2 pl-1 pr-10 sm:leading-5" 
                    onChange={( event ) => this.handleChange( event, 'email' ) }
                  />
    
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
                        d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" 
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
    
              <div className="mb-1">
                <label 
                  htmlFor="password"
                  className="flex justify-between block font-medium text-gray-600"
                >
                  <span>
                    Password
                  </span>
                </label>
    
                <div className="mt-2 relative rounded-md shadow-sm">
                  <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    required="required" 
                    autoComplete="off"  
                    className="form-input block w-full py-2 pl-1 pr-10 sm:leading-5" 
                    onChange={( event ) => this.handleChange( event, 'password' ) }
                  />
    
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
                        d="M400 240H128v-94.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v24c0 13.3 10.7 24 24 24s24-10.7 24-24v-22.6C368 65.8 304 .2 224.3 0 144.8-.2 80 64.5 80 144v96H48c-26.5 0-48 21.5-48 48v176c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V288c0-26.5-21.5-48-48-48zm0 224H48V288h352v176z" 
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
    
              <div className="mb-4">
                <div 
                  id="password-strength-meter__wrapper" 
                  className="w-100 bg-gray-100 rounded"
                >
                  <div 
                    id="password-strength-meter__inner" 
                    className="p-1 rounded" 
                    style={{}}
                  ></div>
                </div>
    
                <div 
                  id="password-strength-meter__reasons" 
                  data-target="password.reasons" 
                  className="p-1"
                ></div>
              </div>
    
              <div className="mb-4">
                <label 
                  htmlFor="passwordConfirm"
                  className="flex justify-between block  font-medium text-gray-600"
                >
                  <span>
                    Confirm Password
                  </span>
                </label>
    
                <div className="mt-2 relative rounded-md shadow-sm">
                  <input 
                    type="password" 
                    name="passwordConfirm" 
                    required="required" 
                    autoComplete="off" 
                    className="form-input block w-full py-2 pl-1 pr-10 sm:leading-5" 
                    onChange={( event ) => this.handleChange( event, 'passwordConfirm' ) }
                  />
    
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
                        d="M400 240H128v-94.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v24c0 13.3 10.7 24 24 24s24-10.7 24-24v-22.6C368 65.8 304 .2 224.3 0 144.8-.2 80 64.5 80 144v96H48c-26.5 0-48 21.5-48 48v176c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V288c0-26.5-21.5-48-48-48zm0 224H48V288h352v176z" 
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
    
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button 
                    type="submit" 
                    className="w-full btn primary large"
                  >
                    Create Account
                  </button>
                </span>
              </div>
            </form>      
            
            <div className="text-center pt-4 text-xs">
              <p>
                Already have an account? <a href="/login" className="font-medium underline text-purple-700">Login to your account.</a>
              </p>
            </div>
          </div>
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
// Connect and Export CreateAccount view Component
export default connect( mapStateToProps, actions )( CreateAccount )