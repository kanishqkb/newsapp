import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Newsitem extends Component {
    static propTypes = {
       
    }

    render() {
        let {title,desc,imageurl,newsurl,author,date,source}=this.props;
        return (
            <div className="my-3">
            <div class="card" style={{}}>
            <div>
            <span class="badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
    {source}
    </span></div>
            <img src={`${imageurl}`} class="card-img-top" alt="..."/>
            
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{desc}</p>
              <a href={newsurl} target="blank" class="btn btn-sm btn-primary">Read More</a>
              <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()} mins ago</small></p>
            </div>
          </div>
          </div>
        )
    }
}

export default Newsitem
