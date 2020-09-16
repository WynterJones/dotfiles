// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// ----
// Child Components
import TemplateCard from '../components/TemplateCard';


// ----
// Templates class View-Component
class Templates extends Component {

  componentDidMount() {
    this.props.setTitle( 'Your Page Templates' );
  }


  // Render Templates
  renderTemplates() {

    // Login to loop over template array
    return (
        <TemplateCard />
    );
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
              Page Templates
            </h1>
    
            <a 
              className="btn primary small" 
              href="/templates/new"
            >
              New Template
            </a>
          </div>
        </header>
    
        <main className="overflow-y-auto">
          <div className="max-w-7xl mx-auto p-8 pb-32">
            <section className="card ">
              <div className="card--header">
                <h3 className="text-lg font-bold">
                  Personal
                </h3>
              </div>
    
              { this.renderTemplates() }
              
            </section>
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
// Connect and Export Templates view Component
export default connect( mapStateToProps, actions )( Templates );