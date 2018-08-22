import React, { Component } from 'react';

import {Link} from 'react-router-dom'


class Nav extends Component {
    render() {
        return (
            <nav>
               <ul>
                   <li><Link to="/CategoryList">Category List</Link></li>
                   <li><Link to="/PhotoList">Photo List</Link></li>
                   <li><Link to="/PhotoDetail">Photo Detail</Link></li>
               </ul>
           </nav>
        );
    }
}

export default Nav;
