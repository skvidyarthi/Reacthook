import React from 'react';

export default class CurrentNews extends React.Component{
    constructor(props){
        super(props);

        this.state={
            newsData:[]
        }
    }

    componentDidMount() {
        const apikey="7ab8f4415e114975a2d9a2c3845d4973";
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey='+apikey)
        .then(res => res.json())
        .then((data) => {
          this.setState({ newsData: data.articles })
        })
        .catch(console.log)
    }
    
    render(){
        const {newsData}= this.state
        return(
            <div>
            <center><h1 className="header">World Latest Feed</h1></center>
            {newsData.map((news)=>(
                <div className="container card col-lg-6">
                <div className="card-body currentnews">
                <a href={news.url}>
                  <h5 className="card-title" >{news.title}</h5>
                 <h6 className="card-subtitle mb-2 text-muted" >{news.description}</h6> 
                  <img src={news.urlToImage} title="{}" alt="news feed" href={news.url} />
                  <span className="PublishDate">{new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit"
                  }).format(news.firstSale)}</span>
                  </a>
                </div>
              </div>
            )
            )}
            </div>
        )
    }
}