// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// ----
// Websites class View-Component
class Websites extends Component {

  componentDidMount() {
    this.props.setTitle( 'Your Websites' );
  }

  // Render Websites
  renderWebsites() {

    // Login to loop over website array
    return (
        <WebsiteCard />
    );
  }

  // Render Component
  render() {
    return (
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <header className="bg-white border-b border-gray-200 text-gray-900">
          <div 
            clasNames="max-w-7xl mx-auto flex justify-between items-center px-8" 
            style={{ height: "82px" }}
          >
            <h1 className="w-1/3 truncate text-xl leading-6 font-semibold">
              My Websites
    
              <span className="block font-normal text-xs text-gray-500">
                2 of 10 websites created.
              </span>
            </h1>
    
            <a 
              className="btn primary" 
              href="/websites/new"  
            >
              New Website
            </a>
          </div>
        </header>
    
        <div className="bg-white border-l border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-8">
            <nav className="-mb-px flex">
              <a 
                className="sub-nav--link active" 
                href="/websites"
              >
                Published
              </a>
    
              <a 
                className="sub-nav--link" 
                href="/websites/archived"
              >
                Archived
              </a>
            </nav>
          </div>
        </div>
    
        <main className="overflow-y-auto">
          <div className="max-w-7xl mx-auto p-8 pb-32">
            <div className="mb-6">
              <nav 
                className="pagy-nav pagination" 
                role="navigation" 
                aria-label="pager"
              >
                <span className="page prev disabled">
                  ‹&nbsp;Prev
                </span> 
                
                <span className="page active">
                  1
                </span> 
                
                <span className="page next disabled">
                  Next&nbsp;›
                </span>
              </nav>
            </div>
    
            <div className="bg-white border border-gray-200 overflow-hidden sm:rounded-md">
              <ul>

                { this.renderWebsites() }

              </ul>
            </div>
          </div>
        </main>
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
// Connect and Export Websites view Component
export default connect( mapStateToProps, actions )( Websites );
