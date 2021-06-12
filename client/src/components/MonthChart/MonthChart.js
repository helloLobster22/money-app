import React from 'react';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import moment from 'moment';

import useStyles from './styles';
import moneyWomen from '../../images/retro-lady-with-money.jpg';

const MonthChart = ({ currentMonth }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  const label = [];
  posts.map((post) => { if(moment(post.createdAt).format('M') == currentMonth) { label.push(post.category)} });
  console.log(label);
  label.filter((v, i, a) => a.indexOf(v) === i);
  console.log(label);
  const moneyData = label.reduce((a, item) => ({ ...a, [item]:0 }), {});

  posts.map((post) => { if(moment(post.createdAt).format('M') == currentMonth) {moneyData[post.category] += post.money } });

  const amount = Object.values(moneyData);

  return (
    !label.length ? <img src={moneyWomen} alt="add money" className={classes.moneyWomen} /> 
    : <div>
          <Doughnut 
          data={{
              labels: label,
              datasets: [{
                label: '# of votes',
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
          }}
          options={{
            plugins: { 
              legend: {
                display: false
              }
            }
          }}
          />
    </div>
  );
}

export default MonthChart;