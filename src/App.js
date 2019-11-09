import React, { Component } from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Left from './component/Left';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      keyword : ""
    }
  }

  onSearch = (keyword) => {
    this.state({
      keyword : keyword
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <br/><br/><br/>
            <div className="col-md-3">
              <Left/>
            </div> 
            <div className="col-md-9 mtp-6 ">
              { this.showContentHeaders(routes) }
            </div> 
          
          <Footer />
          </div>
           
      </Router>
    );
  }

  showContentHeaders = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return (
          <Route 
            key = {index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>
  }
  
}

export default App;
