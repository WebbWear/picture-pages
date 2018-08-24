import React, { Component } from 'react';

import data from '../data.json'

class PhotoDetail extends Component {
    render() {
        let photo = data[this.props.match.params.category].photos
        let id = this.props.match.params.id
        return (
            <div className="photo-card">
                <div className="photo-title">
                    <h3>{photo[id].title}</h3>
                </div>
                <div className="photo">
                    img src={photo[id].imageURL} alt={photo[id].title} />
                    </div>
                    <div className="photo-source">
                        <a href={photo[id].sourceURL}>Source</a>
                    </div>
                </div>   
        );
    }
}

export default PhotoDetail;
