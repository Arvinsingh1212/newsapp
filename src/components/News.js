import React, { Component } from 'react'
import Newsitems from './Newsitems'
export class News extends Component {


  constructor()
  {
    super();
    this.state = {
      articles: [],
      page:1
      
    }
    
  }
  async componentDidMount()
  {
    let url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=01e8934021fd4b44a630bc94cbfa60ab&page=1&pagesize=20"
    let data =await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }
  handlePreviousClick = async()=>{
    console.log("previous")
    let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=01e8934021fd4b44a630bc94cbfa60ab&page=${this.state.page - 1}&pagesize=20}`;
    let data =await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page -1,
      articles: parsedData.articles})
    
  }

  handleNextClick =async()=>{
    console.log("next")
    if(this.state.page +1 >Math.ceil(this.state.totalResults/20)){

    }
    else
    {

    let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=01e8934021fd4b44a630bc94cbfa60ab&page=${this.state.page + 1}&pagesize=20`
    let data =await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page +1,
      articles: parsedData.articles})
    }
  }
  
  render() {
    return (
    <div className= "container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className = "row">
            {this.state.articles.map((element)=>{
            return <div className = "col-md-4" key={element.url}>
                 <Newsitems title = {element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>

            })}   
      </div>
      <div className="container d-flex justify-content-between">     
            <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> previos</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
      </div>
    </div>
    )
  }
}

export default News
