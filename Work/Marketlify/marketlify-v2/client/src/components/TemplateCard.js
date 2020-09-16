// ----
// Dependencies
import React, { Component } from 'react';


// ----
// TemplateCard  class Component
class TemplateCard extends Component {

    render() {
        return (
            <div className="card--content">
                <div className="flex items-center rounded bg-white p-4">
                    <div className="w-2/3 flex items-center">
                        <img 
                            src="https://picsum.photos/500/250" 
                            className="w-12 inline-block rounded mr-4 border border-gray-200"
                            alt="Template preview" 
                        />

                        <span>
                            TEMPLATE NAME
                        </span>
                    </div>

                    <div className="w-1/3 text-right">
                        <a 
                            className="btn text-center secondary mr-1" 
                            rel="nofollow" 
                            data-method="delete" 
                            href="/templates/TEMPLATE_NAME" 
                        >
                            Delete
                        </a>

                        <a 
                            className="btn secondary small mr-1" 
                            target="_blank" 
                            href="/preview/template/TEMPLATE_ID"
                        >
                            Preview
                        </a>

                        <a 
                            className="btn primary small" 
                            href="/templates/TEMPLATE_NAME"
                        >
                            Open Editor
                        </a>
                    </div>
                </div>
            </div>
        );
    }
} 


// Export TemplateCard component
export default TemplateCard;
