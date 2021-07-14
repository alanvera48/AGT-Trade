import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import Home from "../pages/Home";
import Services from "./Services";
import Us from "./Us";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Routes.css";

// const AnimatedSwitch = withRouter(({ location }) => (
//   <TransitionGroup>
//     <CSSTransition key={location.key} classNames="fade" timeout={600}>
//       <Switch location={location}>
//         <Route exact path="/" component={Home}></Route>
//         <Route path="/about" component={Us}></Route>
//         <Route path="/service" component={Services}></Route>
//         <Route path="/contact" component={Contact}></Route>
//       </Switch>
//     </CSSTransition>
//   </TransitionGroup>
// ));

export default function Routes() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={Us}></Route>
                <Route path="/service" component={Services}></Route>
                <Route path="/contact" component={Contact}></Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      > 
      </Route>
      <Footer></Footer>
    </BrowserRouter>
  );
}
