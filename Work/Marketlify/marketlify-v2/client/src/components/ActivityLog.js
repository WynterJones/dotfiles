// ----
// Dependencies
import React, { Component } from 'react';


// ----
// ActivityLog  class Component
class ActivityLog extends Component {

    render() {
        return (
            <div className="card--content">
                <div className="activityLog--notice flex">
                    <img 
                        className="activityLog--avatar w-6 rounded mr-3" 
                        src="https://secure.gravatar.com/avatar/59235f35e4763abb0b547bd093562f6e.png?r=PG" 
                        alt="User Avatar"
                    />
    
                    <span className="mr-1">
                        Admin
                    </span>
    
                    <strong className="activityLog--method mr-1">
                        deleted
                    </strong>
    
                    <a 
                        className="activityLog--link" 
                        href="/websites/5ced3d91-45f1-47fb-a5f8-10d750b25d6a"
                    >
                        tester
                    </a>
    
                    <span className="activityLog--type mr-3">
                        (website)
                    </span>
    
                    <span>
                        11 days ago.
                    </span>
                </div>
            </div>
        );
    }
} 


// Export ActivityLog component
export default ActivityLog;
