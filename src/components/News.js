import React, { Component } from 'react'
import NewsItem from './Newsitem'
import '../styles/News.css'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    article = [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Andrew Jeong, Leo Sands",
            "title": "Russia-Ukraine war latest updates - The Washington Post",
            "description": "A Russian fighter-bomber crash near Krasnodor killed 13 people. President Zelensky said 30 percent of Ukraine's power stations have been destroyed since Oct. 10.",
            "url": "https://www.washingtonpost.com/world/2022/10/18/russia-ukraine-war-latest-updates/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3IMEVYQNKCVDMSNTSKQF2FIOFE.JPG&w=1440",
            "publishedAt": "2022-10-18T10:30:56Z",
            "content": "After a week of deadly strikes against civilians, Kyiv has accused Russias military of continuing attacks on its latest target: Ukraines energy infrastructure. Multiple facilities in the capital and … [+4928 chars]"
        }
    ]
    static defaultProps={
        category:'general',
        pagesize:5
    }
    constructor() {
        super();
        this.state = {
                articles: this.article,
                loading: false,
                page:1,
                max_articles:1
            };
    }
    
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=03ca914131f5458e9ab66550595fb760&pageSize=${this.props.pagesize}&category=${this.props.category}&page=1`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsed_data = await data.json();
        this.setState({ articles: parsed_data.articles,max_articles:parsed_data.totalResults});
        this.setState({loading:false})
    }
    handnext=async()=>
    {
        console.log("Hello you clicked next");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=03ca914131f5458e9ab66550595fb760&pageSize=${this.props.pagesize}&category=${this.props.category}&page=${this.state.page+1}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsed_data = await data.json();
        this.setState({articles:parsed_data.articles,page:this.state.page+1,max_articles:parsed_data.totalResults})
        this.setState({loading:false})
        
    }
    handprev=async()=>
    {
        
        console.log("Hello you clicked prev");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=03ca914131f5458e9ab66550595fb760&pageSize=${this.props.pagesize}&category=${this.props.category}&page=${this.state.page-1}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsed_data = await data.json();
        this.setState({articles:parsed_data.articles,page:this.state.page-1,max_articles:parsed_data.totalResults})
        this.setState({loading:false})
        
    }
    capitalize=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }

    fetchMoreData=async ()=>
    {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=03ca914131f5458e9ab66550595fb760&pageSize=${this.props.pagesize}&category=${this.props.category}&page=${this.state.page+1}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsed_data = await data.json();
        this.setState({articles:this.state.articles.concat(parsed_data.articles),page:this.state.page+1})
        this.setState({loading:false})
        console.log(this.state.articles.length,this.state.max_articles-3)
    }

    render() {
        return (
            <div>
                {/* {this.state.loading && <Spinner/>} */}
                {!this.state.loading &&<h1 className="news-heading">Top {this.capitalize(this.props.category)} Headlines</h1>}
                

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length!==this.state.max_articles?true:false}
                        loader={<Spinner/>}
                    >
                       
                    
                    {<div className='container-main'>
                        <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem imageurl={element.urlToImage?element.urlToImage:'blank.jpg'} news_title={element.title?element.title:""} news_desc={element.description?element.description:""} news_auth={element.author?element.author:""} news_url={element.url} source_name={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                    }

                    </InfiniteScroll>
              
                
                {/* <div className="button-space">
                    <a href={this.url}><button className="nav-button btn1" onClick={this.handprev} style={{visibility: this.state.page<=1?'hidden':'visible'}}>Prev</button></a>
                    <a href={this.url}><button className="nav-button btn2"onClick={this.handnext} style={{visibility: ((this.state.page*this.props.pagesize)<this.state.max_articles?'visible':'hidden')}} >Next</button></a>
                </div>
                 */}
            </div>
        )
    }
}
