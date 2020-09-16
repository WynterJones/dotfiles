// ---
// Dependencies
import React, { Component } from "react";
import { Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

// Routes
import AuthRoutes from "./routes/AuthRoutes";
import NoAuthRoutes from "./routes/NoAuthRoutes";

// Utils
import history from "./utils/history";

// Child Components
import Sidebar from "./components/Sidebar";

// ----
// Application class Component
class Application extends Component {
  async componentDidMount() {
    await this.props.getCurrentUser();
  }

  renderLayout() {
    const { auth } = this.props;

    if (auth === null) {
      console.log("NoAuthRoutes is being shown");
      return <NoAuthRoutes />;
    } else {
      console.log("AuthRoutes is being shown");
      return (
        <>
          <Sidebar />
          <AuthRoutes />
        </>
      );
    }
  }

  render() {
    return (
      <div className="App bg-gray-light" data-testid="Application">
        <main className="overflow-y-auto">
          <div className="max-w-7xl mx-auto p-8 pb-32">
            <Router history={history}>{this.renderLayout()}</Router>
          </div>
        </main>
      </div>
    );
  }
}

// ----
// Map Redux State to Props
function mapStateToProps({ auth }) {
  return { auth };
}

// ----
// Connect and Export Application
export default connect(mapStateToProps, actions)(Application);
