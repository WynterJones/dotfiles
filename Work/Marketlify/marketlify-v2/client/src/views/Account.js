// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// ----
// Account class View-Component
class Account extends Component {

  componentDidMount() {
    this.props.setTitle( 'View & Edit Your Account Details' );
  }


  // Render
  render() {
    return (
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <header className="bg-white border-b border-gray-200 text-gray-900">
          <div 
            className="max-w-7xl mx-auto flex justify-between items-center px-8" 
            style={{ height: "82px" }}
          >
            <h1 className="text-xl leading-6 font-semibold">
              Account
            </h1>
          </div>
        </header>
    
        <main className="overflow-y-auto">
          <div className="w-1/2 p-8 pb-32">
            <form 
              className="edit_user" 
              id="edit_user" 
              action="/" 
              accept-charset="UTF-8" 
              method="post"
            >
              <input 
                type="hidden" 
                name="_method" 
                value="put" 
              />
              
              <input 
                type="hidden" 
                name="authenticity_token" 
                value="6Tqf7QOqsMfyjtaD9cFA2pqJm6CKaiMwRs7/DH/Z2u4Aq8hvFgOivlu2hHEqhaljhnppkf9jf9R843uNdEXPbA==" 
              />
    
              <section className="card ">
                <div className="card--content">
                  <div className="mb-4">
                    <div>
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
                          type="input" 
                          name="email" 
                          value="admin@email.com" 
                          required="required" 
                          autoComplete="off" 
                          className="form-input block w-full pr-10 sm:leading-5" 
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
                  </div>
    
                  <div className="mb-4">
                    <div>
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
                          type="input" 
                          name="username" 
                          value="admin" 
                          required="required" 
                          autoComplete="off" 
                          className="form-input block w-full pr-10 sm:leading-5" 
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
                  </div>
    
                  <div className="mb-4">
                    <div className="">
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
                          type="input" 
                          name="password" 
                          autoComplete="off" 
                          className="form-input block w-full pr-10 sm:leading-5" 
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
                  </div>
    
                  <div className="mb-4">
                    <div>
                      <label 
                        htmlFor="passwordConfirm"
                        className="flex justify-between block font-medium text-gray-600"
                      >
                        <span>
                          Password Confirmation
                        </span>
                      </label>
    
                      <div className="mt-2 relative rounded-md shadow-sm">
                        <input 
                          type="input" 
                          name="passwordConfirm" 
                          autoComplete="off" 
                          className="form-input block w-full pr-10 sm:leading-5" 
                        />
    
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
                              d="M432.3 0C352.8-.2 288 64.5 288 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-64v-46.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-54.6C576 65.8 512 .2 432.3 0zM400 240v224H48V240h352z" 
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="card--footer">
                  <button className="btn text-center secondary w-7">
                    <svg 
                      aria-hidden="true" 
                      focusable="false" 
                      role="img" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 448 512" 
                      className="inline mr-3"
                    >
                      <path 
                        fill="currentColor" 
                        d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z" 
                      ></path>
                    </svg>
    
                    Save
                  </button>
                </div>
              </section>
            </form>
    
            <div className="my-8">
              <div className="border-t border-gray-100"></div>
            </div>
    
            <section className="card">
              <div className="card--content">
                <p className="text-gray-500 italic">
                  This action cannot be undone.
                </p>
              </div>
    
              <div className="card--footer">
                <form 
                  className="button_to" 
                  method="post" 
                  action="/"
                >
                  <input 
                    type="hidden" 
                    name="_method" 
                    value="delete" 
                  />
                  
                  <input 
                    data-confirm="Are you sure?" 
                    className="btn text-center delete" 
                    type="submit" 
                    value="Close My Account" 
                  />
                  
                  <input 
                    type="hidden" 
                    name="authenticity_token" 
                    value="tMfjZ7d15LUW/eH2zFhSe9YCHeXYunvq+rphCLqH7UqHumDG0ik6IcPJKg+NCRRsrq7tdtf4ir5RwppTUE2wQQ==" 
                  />
                </form>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}


// ----
// Map State To Props
function mapStateToProps({ auth }) {
  return { auth };
}


// ----
// Connect and Export Account view Component
export default connect( mapStateToProps, actions )( Account );
