import React, {Component} from 'react';
import Login from './components/login/login';
import Dashboard from './components/Dashboard/Dahboard';
import './App.css';
import User from './components/Panels/UserPanels/User';






class App extends Component {

  constructor(){
    super();
    this.state={
      chartData:{}
       
      
    }
  }

componentWillMount(){
  this.getChartData();
}

getChartData(){
  this.setState({
    chartData:{
      labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets:[
          {
              label: '# of Votes',
              data: [1200000, 1976576, 3403544, 6658798, 2087987, 3243342],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)'
              ],
          }
      ]
    }
  });
}



render(){
  return (
    <div className="App">
      {/* <Login/> */}
      <User/>
      {/* <Dashboard dashboardData={this.state.chartData}/> */}
     {/* <Chart/> */}
     {/* <BarChart/> */}
     {/* <Newchart   /> */}
     
    </div>
  );
}
}
 

export default App;
