import React, { Component } from 'react'
import { client } from '../client';
// import marked from 'marked';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';


class Single extends Component {
    state = {
        food: null,
        des: null,
        sum: null
    } 

    componentDidMount() {
        let id = this.props.match.params.food_id;

        client.getEntry(id).then(res => {
            localStorage.setItem('summary', JSON.stringify(res.fields.summary));
            // console.log(res);
           
            this.setState({
                food: res,
                des: localStorage.getItem('description'),
                sum: JSON.parse(localStorage.getItem('summary'))
            })
            localStorage.setItem('description', this.state.food.fields.description)
        })
            .catch(err => console.log(err))
    }
    

    render() {

        let summary;
        // let description = localStorage.getItem('description');
        // const postDescription = marked(description);
            
            if(this.state.sum)
                summary = this.state.sum;
            else
                return(
                    <p>No Summary</p>
                )


        const rawRichTextField = summary;
        let richTextSummary = documentToHtmlString(rawRichTextField);
        let foodSummary = parse(richTextSummary);

        return (

            this.state.food ? (
                <div className='post'>

                    <h1 className='title'>{this.state.food.fields.name}</h1>
                    {this.state.food.fields.featuredImage && <img className='featuredImage' src={this.state.food.fields.featuredImage.fields.file.url} alt={this.state.food.fields.name} />}
                     
                     {/* { <section dangerouslySetInnerHTML={{ __html: postDescription }} /> } */}
                    <section id="rich-text-body">
                        <h1>Summary : </h1>
                        {foodSummary}
                    </section>
                </div>

            ) : (
                    <p>No food</p>
                )

        )

    }
}

export default Single;