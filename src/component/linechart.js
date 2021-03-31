import React from 'react';
import line from "simple-line-chart";

export default class LineChart extends React.Component{


	render(){

line({
  canvas: document.querySelector("canvas"),
  data: [100, 200, 300, 200, 400, 100]
});

		return(
				<div>
					
				</div>

			);

	}


}