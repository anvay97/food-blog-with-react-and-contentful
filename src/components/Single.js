import React, { Component } from 'react'
import { client } from '../client';
import marked from 'marked';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
// import parse from 'html-react-parser';


class Single extends Component {
    state = {
        food: null,
        des: null,
        // sum: null
    }

    componentDidMount() {
        let id = this.props.match.params.food_id;

        client.getEntry(id).then(res => {

            this.setState({
                food: res,
                des: localStorage.getItem('description'),
                // sum: localStorage.getItem('summary')
            })
            // console.log(this.state.sum);
            localStorage.setItem('description', this.state.food.fields.description)
            // localStorage.setItem('summary', this.state.food.fields.summary)
        })
            .catch(err => console.log(err))
    }

    render() {

        let description = localStorage.getItem('description');
        // let summary = localStorage.getItem('summary');
        // console.log(this.state.sum);
        // console.log(this.state.des);
        const postDescription = marked(description)

        // const rawRichTextField = summary;
        // let richTextSummary = documentToHtmlString(rawRichTextField);
        // let foodSummary = parse(richTextSummary);
        // console.log(foodSummary);

        return (

            this.state.food ? (
                <div className='post'>

                    <h1 className='title'>{this.state.food.fields.name}</h1>
                    {this.state.food.fields.featuredImage && <img className='featuredImage' src={this.state.food.fields.featuredImage.fields.file.url} alt={this.state.food.fields.name} />}
                    <section dangerouslySetInnerHTML={{ __html: postDescription }} />
                    {/* <section id="rich-text-body">
                        <h1>Summary : </h1>
                        {foodSummary}
                    </section> */}
                </div>

            ) : (
                    <p>No food</p>
                )

        )

    }
}

export default Single;