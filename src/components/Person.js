import React from 'react';
const Person = ({ summary }) => {
    return (
        <div id="rich-text-body"></div>
    )
    console.log(summary);
    document.getElementById('rich-text-body').innerHTML = summary;
    

  
}

export default Person