import React, { Component, useState } from 'react'
import { client } from '../client';
import { useEffect } from 'react'


class Single extends Component {
    state = {
        food: []
    }

    componentDidMount() {
      client.getEntries({
        'content_type': 'recipes',
        'fields.name': this.props.location.aboutProps.name
      }).then((data)=>{
          this.setState({food: data});
        console.log(this.state.food.length );

          this.render();
        //   console.log(this.state.food);
          console.log(this.state.food.items[0]["fields"]["name"]);


      }).catch(err=>console.log(err))
    }

    render() {
        console.log(this.state.food.length );
        if(this.state.food.length > 0)
            return(
            
                <p>{this.state.food.items[0]["fields"]["name"]}</p>
            )
        
            else
                return(
                    <p>NO Data</p>
                )
        
             
    }
    // console.log(this.props.id);


}

export default Single;