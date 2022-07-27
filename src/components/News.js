import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import { getDefaultNormalizer } from '@testing-library/react';

export class News extends Component {

    static defaultProps={
        country:"in",
        pageSize:8,
        category:'general'
    }
    static Propstypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
     capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props){
        super(props)
     this.state={
        articles : [],
        loading  : false,
        page:1 ,
        totalresult:0
        
}  
     document.title=`${this.capitalizeFirstLetter(this.props.category)}-Ki2News`; 
    }
    async componentDidMount(){
        this.props.progress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=753040caea1248bfa010558b4493b84a&page=1&pageSize=${this.props.pagesize}`;
        let data=await fetch(url);
        this.props.progress(40);
        let parsedData= await data.json()
        this.props.progress(70);
        console.log(parsedData)
        setTimeout(() => { this.setState({articles:parsedData.articles,
                        totalresult:parsedData.totalResults,
                        loading  : false    });},1500);
                        this.props.progress(100);
}
   
    fetchMoreData = async() => {
        
        

          this.setState({page:this.state.page+1})
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=753040caea1248bfa010558b4493b84a&page=${this.state.page}&pageSize=${this.props.pagesize}`;
            let data=await fetch(url);
            let parsedData= await data.json()
            console.log(parsedData)
            this.setState({articles:this.state.articles.concat(parsedData.articles),
                            totalresult:parsedData.totalResults,
                            loading  : false    })
          
        }
      
      
  

    render() {
        return (
            <>

             <h2 className="text-center" style={{margin:'35px 0px'}} >Ki2News-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
             <hr className="container" />
             {this.state.loading && <Spinner/>}
             {console.log(this.state.articles)}
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalresult}
          loader={<Spinner/>}
        >     
             <div className="container">
            <div className="row">
               {this.state.articles.map((element)=>
            {return <div className="col-md-4 " key={element.url}>
            <Newsitem title={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url}
                      author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
            </div>})}
            </div>
            </div>
            
            </InfiniteScroll>
           
            
                </>
        )
    }
}

export default News
