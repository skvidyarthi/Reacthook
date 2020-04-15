import React, { Component } from 'react';
class CityData extends Component{
 constructor(props){
     super(props)
    this.state={
        CountryData:[]
    }   

 }
 componentDidMount() {
    fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities')
    .then(res => res.json())
    .then((data) => {
      this.setState({ CountryData: data })
    })
    .catch(console.log)
 }

    render(){
        const {CountryData} = this.state
        return(
            <div>
            <center><h1 className="header">Cities Lists Api(Class Component)</h1></center>
            {CountryData.map((country)=>(
                <div className="card">
                <div className="card-body">
                  <h5 className="card-title" >{country.City}</h5>
                  <h6 className="card-subtitle mb-2 text-muted" >{country.State}</h6>
                  <p className="card-text">{country.District}</p>
                </div>
              </div>
            )
            )}
            </div>
        )
    }
}

export default CityData


