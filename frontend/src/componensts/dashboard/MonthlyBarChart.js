import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { expenses } from '../../utils/data';



const MonthlyBarChart = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let exps = expenses.years["2020"]["Monthly"]
    let expense = []
    for(let exp in exps){
      expense.push(exps[exp])
    }
    console.log(expense)
    const data = {

        labels: labels,
        datasets:[
            {
                label: 'Expenses',
                data: expense,
                backgroundColor: [
                    'rgb(250,194,49)',
                    'rgb(145,255,247)',
                    'rgb(255,255,255)',
                    'rgb(19,21,23)',
                    'rgb(80,218,126)',
                    'rgb(250,194,49)',
                    'rgb(145,255,247)',
                    'rgb(255,255,255)',
                    'rgb(19,21,23)',
                    'rgb(80,218,126)',
                    'rgb(19,21,23)',
                    'rgb(80,218,126)'

                  ],
                  hoverOffset: 0,
                 borderWidth: 0,
                 
            }
        ]
    }

    let options = {legend: {display: false}}
  return (
    <div className='bar-chart'>
        <Bar data={data} options={{plugins: options}}/>
    </div>
  )
}

export default MonthlyBarChart