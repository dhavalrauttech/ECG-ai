var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('canvasjs-react-charts');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class BPMchart extends Component {

// Defining the serial port

	render(){	
  

    const options = {
      animationEnabled: true,
      animationDuration: 2000,
      height: 210,
      data: [
      { 
        type: "area", 
          color:"#a20dff",
         dataPoints: [                  
              { x: 10 , y :71},
              { x: 11, y : 55 },
              { x: 12, y:  95 },
              { x: 13, y : 66 },
              { x: 14, y : 90 },
              { x: 15 , y :71},
              { x: 16, y : 50 },
              { x: 17, y:  94 },
              { x: 18, y : 56 },
              { x: 19, y : 85 },
      ]
      }
      ]

    }
   
		return(
		
			<CanvasJSChart options = {options} 
	          />
	        
			);
	}
}
export default BPMchart;
