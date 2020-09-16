// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// ----
// Teams class View-Component
class Teams extends Component {

  componentDidMount() {
    this.props.setTitle( 'Your Team' );
  }

  
  // Render Component
  render() {
    return (
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <header className="bg-white border-b border-gray-200 text-gray-900">
          <div 
            className="max-w-7xl mx-auto flex justify-between items-center px-8" 
            style={{ height: "82px" }}
          >
            <h1 className="text-xl leading-6 font-semibold">
              Teams
            </h1>
    
            <a 
              className="btn primary" 
              href="/teams/new"
            >
              New Team
            </a>
          </div>
        </header>
    
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
    
            <a 
              className="btn primary" 
              href="/teams/new"
            >
              Add Team
            </a>
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
// Connect and Export Teams view Component
export default connect( mapStateToProps, actions )( Teams );