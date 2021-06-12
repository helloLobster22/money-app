import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel'

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import MonthChart from './components/MonthChart/MonthChart';
import YearChart from './components/YearChart/YearChar';
import logo from './images/logo.svg';

const App = () => {
  const posts = useSelector((state) => state.posts);
  const [month, setMonth] = useState(new Date().getMonth());
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div class="container">
    <div class="logo">
      <img src={logo}/>
    </div>
      <Carousel 
      autoPlay={false} 
      navButtonsAlwaysInvisible={true}
      animation={"slide"}
      >
        <div class="grid-layout"> 
          <div class="grid1">
            <Carousel
            autoPlay={false}
            navButtonsAlwaysInvisible={true}
            index={month}
            onChange={(index, active) => setMonth(index)}
            >
              { months.map( (month, i) => <div class="month" key={i}>{month}</div>) }
            </Carousel>
            <div style={{ boxShadow: "0px 0px 22px 7px rgba(0,0,0,0.25)"}}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Posts setCurrentId={setCurrentId} currentMonth={month+1}/> 
            </div>
          </div>
          <div class="grid2">
            <MonthChart currentMonth={month+1}/>
          </div>
        </div>
        <div class="grid-layout2">
          <YearChart style={{maxWidth: "1056px"}}/> 
        </div>  
      </Carousel> 
    </div>          
  );
};

export default App;
