import React, { Component } from 'react'
import marked from 'marked';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';


class Single extends Component {
    state = {
        food: null,
        des: null,
        sum: null
    }

    componentDidMount() {
        let foodObj = this.props.location.food;
        localStorage.setItem('summary', JSON.stringify(foodObj.summary.json));
        localStorage.setItem('description', JSON.stringify(foodObj.description));
     
        this.setState({
            food: foodObj,
            des: JSON.parse(localStorage.getItem('description')),
            sum: JSON.parse(localStorage.getItem('summary')),
        })
    }


    render() {

        let summary;
        let description;

        if (this.state.sum)
            summary = this.state.sum;
        else
            return (
                <p>No Summary</p>
            )

        if (this.state.des) {
            description = this.state.des;
            description = marked(description);
        }
        else
            return (
                <p>No Description</p>
            )


        const rawRichTextField = summary;
        let richTextSummary = documentToHtmlString(rawRichTextField);
        let foodSummary = parse(richTextSummary);

        return (

            this.state.food ? (
                <div className='post'>

                    <h1 className='title'>{this.state.food.name}</h1>
                    {this.state.food.featuredImage && <img className='featuredImage' src={this.state.food.featuredImage.url} alt={this.state.food.name} />}

                    { <section dangerouslySetInnerHTML={{ __html: description }} />}
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