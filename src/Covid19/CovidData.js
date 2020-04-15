import React, { Component } from 'react';
class Covid19 extends Component{
 constructor(props){
     super(props)
    this.state={
        CovidData:[]
    }   

 }
 componentDidMount() {
    fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
    .then(res => res.json())
    .then((data) => {      
      this.setState({ CovidData: data.data })
    })
    .catch(err=>{
      console.log(err);
    })
 }

    render(){
        const {CovidData} = this.state
        return(
            <div>
            <center><h1 className="header">Cities Lists</h1></center>
            {CovidData.map((covid)=>(
                <div className="card">
                <div className="card-body">
                  <h5 className="card-title" >{covid.total_cases}</h5>
                  <h6 className="card-subtitle mb-2 text-muted" >{covid.recovery_cases}</h6>
                  <p className="card-text">{covid.death_cases}</p>
                </div>
              </div>
            )
            )}
            </div>
        )
    }
}

export default Covid19


