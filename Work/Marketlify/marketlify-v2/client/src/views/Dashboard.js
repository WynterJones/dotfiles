// ----
// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


// ----
// Child Components
import ActivityLog from '../components/ActivityLog';


// ----
// Dashboard class View-Component
class Dashboard extends Component {

  componentDidMount() {
    this.props.setTitle( 'Your Dashboard' );
  }

    render() {
        return (
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <header className="bg-white border-b border-gray-200 text-gray-900">
              <div 
                className="max-w-7xl mx-auto flex justify-between items-center px-8" 
                style={{ height: "82px" }}
              >
                <h1 className="text-xl leading-6 font-semibold">
                  Dashboard
                </h1>
        
                <a 
                  className="btn primary" 
                  href="/websites/new"
                >
                  New Website
                </a>
              </div>
            </header>
        
            <main className="overflow-y-auto">
              <div className="max-w-7xl mx-auto p-8 pb-32">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:mt-0 md:col-span-2">
        
                    <section className="card mb-6">
                      <div className="card--header">
                        <h3 className="mb-1 font-medium">
                          All Visitors
                        </h3>
        
                        <h5 className="text-xs capitalize text-gray-400">
                          Sep  7 (12:00AM) to Sep 13 (12:00AM)
                        </h5>
                      </div>
        
                      { /*
                      <div className="card--content">
                        <div 
                          id="chart-1" 
                          style="height: 250px; width: 100%; text-align: center; color: rgb(153, 153, 153); line-height: 250px; font-size: 14px; font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Verdana, Arial, Helvetica, sans-serif; overflow: hidden;" data-highcharts-chart="0"
                        >
                          <div 
                            id="highcharts-dwjhmi0-0" 
                            dir="ltr" 
                            className="highcharts-container" 
                            style="position: relative; overflow: hidden; width: 720px; height: 250px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"
                          >
                            <svg 
                              version="1.1" 
                              className="highcharts-root" 
                              style="font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size:12px;" 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="720" 
                              height="250" 
                              viewBox="0 0 720 250"
                            >
                              <desc>
                                Created with Highcharts 8.1.2
                              </desc>
                              
                              <defs>
                                <clipPath id="highcharts-dwjhmi0-1-">
                                  <rect 
                                    x="0" 
                                    y="0" 
                                    width="677" height="202" fill="none"></rect></clipPath><linearGradient x1="0" x2="0" y1="0" y2="1" id="highcharts-dwjhmi0-12"><stop offset="0" stop-color="#7e3af2" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(126,58,242)" stop-opacity="0"></stop></linearGradient><linearGradient x1="0" x2="0" y1="0" y2="1" id="highcharts-dwjhmi0-13"><stop offset="0" stop-color="rgb(126,58,242)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(126,58,242)" stop-opacity="0"></stop></linearGradient></defs><rect fill="#ffffff" class="highcharts-background" x="0" y="0" width="720" height="250" rx="0" ry="0"></rect><rect fill="none" class="highcharts-plot-background" x="33" y="10" width="677" height="202"></rect><g class="highcharts-grid highcharts-xaxis-grid" data-z-index="1"><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 118.5 10 L 118.5 212" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 212.5 10 L 212.5 212" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 307.5 10 L 307.5 212" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 402.5 10 L 402.5 212" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 497.5 10 L 497.5 212" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 592.5 10 L 592.5 212" opacity="1"></path><path fill="none" data-z-index="1" class="highcharts-grid-line" d="M 687.5 10 L 687.5 212" opacity="1"></path></g><g class="highcharts-grid highcharts-yaxis-grid" data-z-index="1"><path fill="none" stroke="#fafafa" stroke-width="2px" data-z-index="1" class="highcharts-grid-line" d="M 33 212.5 L 710 212.5" opacity="1"></path><path fill="none" stroke="#fafafa" stroke-width="2px" data-z-index="1" class="highcharts-grid-line" d="M 33 111.5 L 710 111.5" opacity="1"></path><path fill="none" stroke="#fafafa" stroke-width="2px" data-z-index="1" class="highcharts-grid-line" d="M 33 10.5 L 710 10.5" opacity="1"></path></g><rect fill="none" class="highcharts-plot-border" data-z-index="1" x="33" y="10" width="677" height="202"></rect><g class="highcharts-axis highcharts-xaxis" data-z-index="2"><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 118.5 212 L 118.5 222" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 212.5 212 L 212.5 222" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 307.5 212 L 307.5 222" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 402.5 212 L 402.5 222" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 497.5 212 L 497.5 222" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 592.5 212 L 592.5 222" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 687.5 212 L 687.5 222" opacity="1"></path><path fill="none" class="highcharts-axis-line" stroke="#ccd6eb" stroke-width="1" data-z-index="7" d="M 33 212.5 L 710 212.5"></path></g><g class="highcharts-axis highcharts-yaxis" data-z-index="2"><path fill="none" class="highcharts-axis-line" data-z-index="7" d="M 33 10 L 33 212"></path></g><g class="highcharts-series-group" data-z-index="3"><g class="highcharts-series highcharts-series-0 highcharts-areaspline-series highcharts-color-0" data-z-index="0.1" opacity="1" transform="translate(33,10) scale(1 1)" clip-path="url(#highcharts-dwjhmi0-1-)"><path fill="url(#highcharts-dwjhmi0-13)" d="M 6.6372549019608 202 C 6.6372549019608 202 63.528011204482326 202 101.45518207283 202 C 139.382352941178 202 158.34593837535198 202 196.2731092437 202 C 234.200280112048 202 253.16386554622198 202 291.09103641457 202 C 329.018207282914 202 347.981792717086 202 385.90896358543 202 C 423.83613445377796 202 442.79971988795205 202 480.7268907563 202 C 518.6540616246481 202 537.617647058822 202 575.54481792717 202 C 613.471988795518 202 670.36274509804 202 670.36274509804 202 L 670.36274509804 202 C 670.36274509804 202 613.471988795518 202 575.54481792717 202 C 537.617647058822 202 518.6540616246481 202 480.7268907563 202 C 442.79971988795205 202 423.83613445377796 202 385.90896358543 202 C 347.981792717086 202 329.018207282914 202 291.09103641457 202 C 253.16386554622198 202 234.200280112048 202 196.2731092437 202 C 158.34593837535198 202 139.382352941178 202 101.45518207283 202 C 63.528011204482326 202 6.6372549019608 202 6.6372549019608 202" class="highcharts-area" data-z-index="0"></path><path fill="none" d="M 6.6372549019608 202 C 6.6372549019608 202 63.528011204482326 202 101.45518207283 202 C 139.382352941178 202 158.34593837535198 202 196.2731092437 202 C 234.200280112048 202 253.16386554622198 202 291.09103641457 202 C 329.018207282914 202 347.981792717086 202 385.90896358543 202 C 423.83613445377796 202 442.79971988795205 202 480.7268907563 202 C 518.6540616246481 202 537.617647058822 202 575.54481792717 202 C 613.471988795518 202 670.36274509804 202 670.36274509804 202" class="highcharts-graph" data-z-index="1" stroke="url(#highcharts-dwjhmi0-12)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 6.6372549019608 202 C 6.6372549019608 202 63.528011204482326 202 101.45518207283 202 C 139.382352941178 202 158.34593837535198 202 196.2731092437 202 C 234.200280112048 202 253.16386554622198 202 291.09103641457 202 C 329.018207282914 202 347.981792717086 202 385.90896358543 202 C 423.83613445377796 202 442.79971988795205 202 480.7268907563 202 C 518.6540616246481 202 537.617647058822 202 575.54481792717 202 C 613.471988795518 202 670.36274509804 202 670.36274509804 202" visibility="visible" data-z-index="2" class="highcharts-tracker-line" stroke-linecap="round" stroke-linejoin="round" stroke="rgba(192,192,192,0.0001)" stroke-width="22"></path></g><g class="highcharts-markers highcharts-series-0 highcharts-areaspline-series highcharts-color-0 highcharts-tracker" data-z-index="0.1" opacity="1" transform="translate(33,10) scale(1 1)"><path fill="url(#highcharts-dwjhmi0-12)" visibility="hidden" d="M 196 202 A 0 0 0 1 1 196 202 Z" class="highcharts-halo highcharts-color-0" data-z-index="-1" fill-opacity="0.25"></path><path fill="url(#highcharts-dwjhmi0-12)" d="M 196 208 A 6 6 0 1 1 196.005999999 207.99999700000026 Z" stroke="#ffffff" stroke-width="1" opacity="1" visibility="hidden"></path></g></g><text x="360" text-anchor="middle" class="highcharts-title" data-z-index="4" style="color:#333333;font-size:18px;fill:#333333;" y="24"></text><text x="360" text-anchor="middle" class="highcharts-subtitle" data-z-index="4" style="color:#666666;fill:#666666;" y="24"></text><text x="10" text-anchor="start" class="highcharts-caption" data-z-index="4" style="color:#666666;fill:#666666;" y="247"></text><g class="highcharts-axis-labels highcharts-xaxis-labels" data-z-index="7"><text x="118.65219421102" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="232" opacity="1"><tspan>8. Sep</tspan></text><text x="213.47012138189" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="232" opacity="1"><tspan>9. Sep</tspan></text><text x="308.28804855275" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="232" opacity="1"><tspan>10. Sep</tspan></text><text x="403.10597572362" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="232" opacity="1"><tspan>11. Sep</tspan></text><text x="497.92390289449" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="232" opacity="1"><tspan>12. Sep</tspan></text><text x="592.74183006536" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="232" opacity="1"><tspan>13. Sep</tspan></text><text x="687.55975723623" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="232" opacity="1"><tspan>14. Sep</tspan></text></g><g class="highcharts-axis-labels highcharts-yaxis-labels" data-z-index="7"><text x="18" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="217" opacity="1">0</text><text x="18" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="116" opacity="1">1</text><text x="18" style="color:#666666;cursor:default;font-size:12px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="15" opacity="1">2</text></g><g class="highcharts-label highcharts-tooltip highcharts-color-0" style="white-space:nowrap;pointer-events:none;" data-z-index="8" transform="translate(160,-9999)" opacity="0" visibility="hidden"><path fill="none" class="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 135.5 0.5 C 138.5 0.5 138.5 0.5 138.5 3.5 L 138.5 41.5 C 138.5 44.5 138.5 44.5 135.5 44.5 L 74.5 44.5 L 68.5 50.5 L 62.5 44.5 L 3.5 44.5 C 0.5 44.5 0.5 44.5 0.5 41.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke="#000000" stroke-opacity="0.049999999999999996" stroke-width="5" transform="translate(1, 1)"></path><path fill="none" class="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 135.5 0.5 C 138.5 0.5 138.5 0.5 138.5 3.5 L 138.5 41.5 C 138.5 44.5 138.5 44.5 135.5 44.5 L 74.5 44.5 L 68.5 50.5 L 62.5 44.5 L 3.5 44.5 C 0.5 44.5 0.5 44.5 0.5 41.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke="#000000" stroke-opacity="0.09999999999999999" stroke-width="3" transform="translate(1, 1)"></path><path fill="none" class="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 135.5 0.5 C 138.5 0.5 138.5 0.5 138.5 3.5 L 138.5 41.5 C 138.5 44.5 138.5 44.5 135.5 44.5 L 74.5 44.5 L 68.5 50.5 L 62.5 44.5 L 3.5 44.5 C 0.5 44.5 0.5 44.5 0.5 41.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke="#000000" stroke-opacity="0.15" stroke-width="1" transform="translate(1, 1)"></path><path fill="rgba(247,247,247,0.85)" class="highcharts-label-box highcharts-tooltip-box" d="M 3.5 0.5 L 135.5 0.5 C 138.5 0.5 138.5 0.5 138.5 3.5 L 138.5 41.5 C 138.5 44.5 138.5 44.5 135.5 44.5 L 74.5 44.5 L 68.5 50.5 L 62.5 44.5 L 3.5 44.5 C 0.5 44.5 0.5 44.5 0.5 41.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" stroke="url(#highcharts-dwjhmi0-12)" stroke-width="1"></path><text x="8" data-z-index="1" y="20" style="color:#333333;cursor:default;font-size:12px;fill:#333333;"><tspan style="font-size: 10px">Wednesday, Sep  9, 04:00</tspan><tspan style="fill:url(#highcharts-dwjhmi0-12)" x="8" dy="15">●</tspan><tspan dx="0"> Value: </tspan><tspan style="font-weight:bold" dx="0">0</tspan></text></g>
                            </svg>
                          </div>
                        </div>
                      </div>

                      */}
        
                      <div className="card--footer">
                        <h5 className="text-xs text-gray-400">
                          Note: During beta the visitor count may be skewed or mismatch other tracking platforms.
                        </h5>
                      </div>
                    </section>
        
                    <section className="card">
                      <div className="card--header">
                        <h3 className="font-medium">
                          Activity Log
                        </h3>
                      </div>
        
                      <ActivityLog />
                    </section>
                </div>
        
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <section className="card mb-6">
                      <div className="card--header">
                        <h3 className="font-medium">
                          Early Access Updates
                        </h3>
                      </div>
        
                      <div className="card--content">
                        <p className="text-sm text-gray-700">
                          Thank you for using Marketlify. During the Early Access (alpha) we will be providing updates here.
                        </p>
                      </div>
                    </section>
        
                    <section className="card ">
                      <div className="card--header">
                        <h3 className="font-medium">
                          Spot a Bug?
                        </h3>
                      </div>
        
                      <div className="card--content">
                        <p className="text-sm text-gray-700">
                          If you would like to report an error or suggest a feature let us know by emailing us <a href="mailto:email@example.com" className="text-purple-700">support@marketlify.com</a> anytime.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
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
// Connect and Export Dashboard view Component
export default connect( mapStateToProps, actions )( Dashboard );
