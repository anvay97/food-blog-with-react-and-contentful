import React, { Component } from 'react'
// import * as contentful from 'contentful';
// import { client } from '../client';

// const client = contentful.createClient({
//     accessToken: 'CFPAT-IwIyhhTn8IQfjS_squdd4edxZ40KpnUm2XBpmpOujeY'
//   })

const {REACT_APP_SPACE_ID, REACT_APP_CMA_TOKEN} = process.env;

class Form extends Component {
    state = {
        fullName: null,
        email: null,
        subject: null,
        message: null,

        // formData:{
        //     "fields": {
        //       "fullName": {
        //         "en-US": this.state.fullName
        //       },
        //       "eMailAddress":{
        //         "en-US": this.state.email
        //       },
        //       "subject":{
        //         "en-US": this.state.subject
        //       },
        //       "message":{
        //         "en-US": this.state.message
        //       }
        //     }

        // formData:{
        //     "fields": {
        //       "fullName": this.state.fullName,
        //       "eMailAddress":this.state.email,
        //       "subject":this.state.subject,
        //       "message":this.state.message
        //     }
    }

    formData={
        "fields": {
          "fullName": {
            "en-US": ""
          },
          "eMailAddress":{
            "en-US": ""
          },
          "subject":{
            "en-US": ""
          },
          "message":{
            "en-US": ""
          }
        }
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value.trim(),
            formData:{
                "fields": {
                  "fullName": {
                    "en-US": this.state.fullName
                  },
                  "eMailAddress":{
                    "en-US": this.state.email
                  },
                  "subject":{
                    "en-US": this.state.subject
                  },
                  "message":{
                    "en-US": this.state.message
                  }
                }
            }
        });
    }


    
    handleSubmit = (e) => {

        let formData = this.state.formData;
        console.log(formData);
        e.preventDefault();
        // console.log(this.state); 
            window.fetch(
                `https://api.contentful.com/spaces/${REACT_APP_SPACE_ID}/entries`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/vnd.contentful.management.v1+json",
                        Authorization: `Bearer ${REACT_APP_CMA_TOKEN}`,
                        "X-Contentful-Content-Type": "contactForm"
                    },
                    body: JSON.stringify({ formData }),
                }
            ).then(res => console.log(res))
                .catch(error=> console.log(error));

        // client.getSpace(REACT_APP_SPACE_ID)
        //     .then((space) => space.getEnvironment('master'))
        //     .then((environment) => environment.createEntry('contactForm', formData))
        //     .then((entry) => console.log(entry))
        //     .catch(console.error)
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Full Name" placeholder="Full Name">Full Name:</label>
                    <input type="text" id="fullName" onChange={this.handleChange} />
                    <label htmlFor="Email" placeholder="Email Address">Email:</label>
                    <input type="text" id="email" onChange={this.handleChange} />
                    <label htmlFor="Subject">Subject : </label>
                    <input type="text" id="subject" onChange={this.handleChange} />
                    <label htmlFor="Message">Message : </label>
                    <input type="text" id="message" onChange={this.handleChange} />
                    <button>Send Message</button>
                </form>
            </div>
        )
    }
}


export default Form;

