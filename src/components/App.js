import React from "react";
import FlareComponent from "flare-react";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartPage from "./StartPage";
import Mobile from "./Mobile";
import Navbar from "./Navbar";
import Theme from "./Theme";
import Activity from "./Activity";
import ContactUs from "./ContactUs";
import About from "./About";

class App extends React.Component {
  state = { loading: true, themeVal: "food", activityVal: "1" };

  componentDidMount() {
    this.onPageLoader().then(() => this.setState({ loading: false }));
  }

  onPageLoader() {
    if (window.location.href.indexOf("/food/1") === -1)
      return new Promise((resolve) => setTimeout(() => resolve(), 5000));

    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  handleThemeClicked = (themeVal) => {
    this.setState({ themeVal });
  };

  handleActivityClicked = (activityVal) => {
    this.setState({ activityVal });
  };

  renderComponents() {
    if (this.state.loading && !isMobile) {
      return (
        <div style={{ marginTop: "-7.5%", marginLeft: "15%", overflowX: "hidden" }}>
          <FlareComponent
            file="./rive_files/logo.flr"
            animationName="logo"
            width={1000}
            height={1000}
            transparent="true"
          />
        </div>
      );
    }
    
    return (
      <Router>
        <Navbar />
        <BrowserView>
          <Switch>
            <Route exact path="/" render={(props) => <StartPage {...props} handleThemeClicked={this.handleThemeClicked} />} />
            <Route
              exact
              path={`/${this.state.themeVal}`}
              render={(props) => (
                <Theme {...props} handleActivityClicked={this.handleActivityClicked} themeVal={this.state.themeVal} />
              )}
            />
            <Route exact path={`/${this.state.themeVal}/${this.state.activityVal}`} component={Activity} />
            <Route exact path="/contact" component={ContactUs} />
			<Route exact path="/about" component={About} />
          </Switch>
        </BrowserView>
        <MobileView>
          <Mobile />
        </MobileView>
      </Router>
    );
  }

  render() {
    return this.renderComponents();
  }
}

export default App;
