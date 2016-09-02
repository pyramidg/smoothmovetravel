import React from 'react'
import { Link } from 'react-router'
import bootstrap   from  'bootstrap'

class Layout extends React.Component {
    render() {
        return (
          <div>
            <h1> Layout Killer News! </h1>
            {this.props.children}
            <Link to="settings"><button className="btn btn-success">Settings</button></Link>
            <Link to="contacts"><button className="btn btn-primary">Contacts</button> </Link>
            <Link to="about"><button className="btn btn-info">About</button> </Link>
            <Link to="projects"><button className="btn btn-info">Projects</button> </Link>





            </div>
        )
    }
}


export default Layout
