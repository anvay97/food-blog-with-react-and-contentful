import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const {REACT_APP_SPACE_ID,REACT_APP_ACCESS_TOKEN} = process.env;

const query=`

{
    navigationCollection(order:[
      sys_publishedAt_ASC
    ]){
      items{
        navlink,
        navtitle
      }
    }
  }
`;

class Navbar extends Component {

    state={
        Navlinks: []
    }

    componentDidMount(){
        window.fetch(
            `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`
                },
                body: JSON.stringify({ query }),
            }
        ).then(res => res.json())
            .then(({data}) =>{ 
                console.log(data);
                this.setState({
                    Navlinks: data.navigationCollection.items,
                });    
            })
            .catch(error=> console.log(error));
    }

    render() {
        return (
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <p className="brand-logo">React and Contentful</p>
                    <ul className="right" style={{ marginLeft: '60%' }}>
                        {
                            this.state.Navlinks.map((nav, i) => {
                                return (
                                    <li key={i}><NavLink to={`/${nav.navlink}`}>{nav.navtitle}</NavLink></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar