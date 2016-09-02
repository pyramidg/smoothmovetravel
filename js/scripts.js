import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import angular      from 'angular'
import React      from 'react'
import ReactDOM  from 'react-dom'
import react3d      from 'react-3d-carousel'
import bootstrap   from  'bootstrap'

import About      from '../components/About'
import ContactsList from '../components/ContactsList'
import Layout     from  '../components/Layout'
import Projects   from '../components/Projects'
import Settings   from '../components/Settings'

class App extends React.Component {
    render() {
        return (
          <div>
              <h1>App Area</h1>
              </div>
        )
    }
}



 const reactContainer = document.getElementById('reactContainer')

 ReactDOM.render(

    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Projects}></IndexRoute>
        <Route path="contacts" component={ContactsList}></Route>
        <Route path="settings" component={Settings}></Route>
        <Route path="about" component={About}></Route>
        <Route path="projects" component={Projects}></Route>




      </Route>
    </Router>,
  reactContainer);
