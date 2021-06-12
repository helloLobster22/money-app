import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';

import useStyles from './styles';

const YearChart = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    const spending = { 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0 };

    posts.map((post) => (spending[moment(post.createdAt).format('M')] += post.money ));
    const amount = Object.values(spending);

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const data = {
      labels: labels,
      datasets: [
        {
          label: '',
          data: amount,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }

    return (

      !posts.length ? <div></div> : <div>
        <div className={classes.year}>2021</div>
        <Bar 
        className={classes.chartYearV}
        data={data}
        height={450}
        width={1000}
        options={{
          scales: {
            y: {
              grid: {
                color: '#F7CDDE',
              }
            },
            x: {
              grid: {
                color: '#F7CDDE',
              }
            }
          },
          plugins: { 
            legend: {
              display: false
            }
          },
        }}
        />
        <Bar
        className={classes.chartYearH} 
        data={data} 
        height={1600}
        width={1000}
        options={{
          indexAxis: 'y',
          scales: {
            y: {
              grid: {
                color: '#F7CDDE',
              }
            },
            x: {
              grid: {
                color: '#F7CDDE',
              }
            }
          },
          plugins: { 
            legend: {
              display: false
            }
          },
        }}
        />
    </div>
    );
}

export default YearChart;