import React from 'react';
import {Bar} from 'react-chartjs-2';
const AllPLanetsChart = (props)=>{
        console.log(props.planet)
        return (
            <div style={{fontSize:`${40 - 3*props.index}px`}} className="population-card">
                <Bar
                    data={props.planet}
                    options={{legend:{display: false}}}
                />
            </div>
        )

}


export default AllPLanetsChart;