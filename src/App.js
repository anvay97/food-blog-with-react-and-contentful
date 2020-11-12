import React from 'react';
import  {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Posts from './components/Posts'
import Navbar from './components/Navbar';
import Single from './components/Single';
import Books from './components/Books';

const query = `
{
    recipesCollection{
        total
        items {
          sys{
            id
          }
          name
          featuredImage {
            title
            url
          }
          description,
          location
          summary{
              json
            }
        } 
      }
        booksCollection 
     {
          total
          items {
            bookName
            bookImage {
              title
              url
            }
            bookDescription
            author {
              authorName
              authorImage {
                title
                url
              }
              authorBio
            }   
        }
        }
        navigationCollection{
            items{
              navlink
            }
          }
      }    
`
const {REACT_APP_SPACE_ID,REACT_APP_ACCESS_TOKEN} = process.env;

class App extends React.Component {
    state = {
        articles: [],
        books: [],
        navLinks: [],
        bookCount: 0,
        articleCount: 0
    }

    componentDidMount() {
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
                        articles: data.recipesCollection.items,
                        articleCount: data.recipesCollection.total});
                    this.setState({
                        books: data.booksCollection.items,
                        bookCount: data.booksCollection.total
                    });
                    this.setState({
                        navLinks: data.navigationCollection.items
                    })
                })
                .catch(error=> console.log(error));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                        <Redirect to="/home" /> 
                        <Route path="/home" component={Home} />
                        <Route path="/recipes" render={()=> <Posts posts={this.state.articles} articleCount={this.state.articleCount} /> } />
                        <Route path="/books" render={()=> <Books books={this.state.books} bookCount={this.state.bookCount} /> } />
                        <Route path="/food/:food_name" component={Single} />
                </div>
            </Router>
        );
        
    }
}

export default App;
