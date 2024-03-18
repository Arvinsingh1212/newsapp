import React, { Component } from 'react'


export class Newsitems extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3=true">
                <div className="card" style={{width:"18rem"}}>
                    <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEtddvHfFSjT_wqWDxt48OXO6oduXj4ntmQ&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
                    </div>
                </div>
      </div>
    )
  }
}

export default Newsitems
