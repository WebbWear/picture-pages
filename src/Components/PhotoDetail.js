import React, { Component } from 'react';

import data from '.Components/data'


class PhotoDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }

    componentDidMount() {
        this.setState({ list:data})
    }

    render() {
        return (
            <div>
                {this.state.list.map((pandas, i) => {
                    return <li>
                        {pandas.title}
                        <img src={"https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg"} />
                    </li>
                )})
                
                
            </div>
        );
    }
}

export default PhotoDetail;
