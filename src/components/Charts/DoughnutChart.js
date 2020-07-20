import React, {Component} from 'react'

import {Doughnut} from 'react-chartjs-2';


class DoughNutChart extends Component{

    constructor(props){
        super(props);
        this.state={
            chartData:  props.chartData
              
            
        }
    }
    
    static defaultProps ={
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }
    
        render(){
       return(
           <div className='chart' >
             
    <Doughnut 
                data={this.state.chartData}
                width={200}
                height={250}
               
                options={{
                    responsive:true,
                    maintainAspectRatio: false,
                    title:{ 
                        display:this.props.displayTitle,
                    text: 'Largest Votes in India',
                    fontSize: 25
                 },
                 legend:{
                     display: this.props.displayLegend,
                     position:this.props.legendPosition,
    
                 }
                 }}
    />
   
    
           </div>
       )
        }
    }
    export default DoughNutChart;
    
    
    