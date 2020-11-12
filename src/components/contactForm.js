import React, { Component } from 'react'

const {REACT_APP_SPACE_ID, REACT_APP_CMA_TOKEN} = process.env;

class Form extends Component {
    state = {
        fullName: '',
        email: '',
        subject: '',
        message: '',
    }

    // formData={
    //     "fields": {
    //       "fullName": {
    //         "en-US": ""
    //       },
    //       "eMailAddress":{
    //         "en-US": ""
    //       },
    //       "subject":{
    //         "en-US": ""
    //       },
    //       "message":{
    //         "en-US": ""
    //       }
    //     }
    // }
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value.trim(),
        });
    }


    
    handleSubmit = (e) => {
        e.preventDefault();
            window.fetch(
                `https://api.contentful.com/spaces/${REACT_APP_SPACE_ID}/entries`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/vnd.contentful.management.v1+json",
                        Authorization: `Bearer ${REACT_APP_CMA_TOKEN}`,
                        "X-Contentful-Content-Type": "contactForm"
                    },
                    body: JSON.stringify({ fields: {
                        fullName: {
                          "en-US": this.state.fullName
                        },
                        eMailAddress:{
                          "en-US": this.state.email
                        },
                        subject:{
                          "en-US": this.state.subject
                        },
                        message:{
                          "en-US": this.state.message
                        }
                      } }),
                }
            ).then(res => console.log(res))
                .catch(error=> console.log(error));
                alert('Thank You For Your Response');
                // this.refreshForm();


       
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Full Name" placeholder="Full Name">Full Name:</label>
                    <input type="text" id="fullName" onChange={this.handleChange} value={this.state.fullName} />
                    <label htmlFor="Email" placeholder="Email Address">Email:</label>
                    <input type="text" id="email" onChange={this.handleChange} value={this.state.email} />
                    <label htmlFor="Subject">Subject : </label>
                    <input type="text" id="subject" onChange={this.handleChange} value={this.state.subject} />
                    <label htmlFor="Message">Message : </label>
                    <input type="text" id="message" onChange={this.handleChange} value={this.state.message} />
                    <button>Send Message</button>
                </form>
            </div>
        )
    }
}


export default Form;

