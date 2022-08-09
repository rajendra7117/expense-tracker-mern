import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart as Chart} from 'chart.js/auto'
const ExpenseCircleChart = () => {

    const data = {
        labels: [
            'Food',
            'Travel',
            'Entertainment',
            'Shopping',
            'Others'
        ],
        datasets:[
            {
                label: 'Expenses',
                data: [50, 20, 10, 10, 10],
                backgroundColor: [
                    'rgb(250,194,49)',
                    'rgb(145,255,247)',
                    'rgb(255,255,255)',
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
    <Doughnut data={data} options={{plugins: options}}/>
  )
}

export default ExpenseCircleChart;