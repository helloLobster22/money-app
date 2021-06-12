import React, { useState, useEffect } from 'react';
import { TextField, IconButton, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ money: '', category: '', comment: '', createdAt: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ money: '', category: '', comment: '', createdAt: today2.toString() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      if (postData.money && postData.category) {
        if (!postData.createdAt) postData.createdAt = new Date();
        dispatch(createPost(postData));
        clear();
      }
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const today2 = `${new Date().getFullYear()}-${new Date().getMonth() > 9 ? '' : 0}${(new Date().getMonth()+1)}-${new Date().getDate() > 9 ? '' : 0}${new Date().getDate()}`;

  return (
    
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Paper className={classes.paper}>
          <Box className={classes.box1} display="flex" p={1}>
            <TextField required className={classes.moneyInput} name="money" variant="outlined" label="Money" value={postData.money} onChange={(e) => setPostData({ ...postData, money: e.target.value })} />
            <TextField required className={classes.categoryInput} name="category" variant="outlined" label="Category"  value={postData.category} onChange={(e) => setPostData({ ...postData, category: e.target.value })} />
            <TextField className={classes.commentInput} name="comment" variant="outlined" label="Comment"  value={postData.comment} onChange={(e) => setPostData({ ...postData, comment: e.target.value })} />
            <TextField name="createdAt" label="Created At" type="date" defaultValue={today2.toString()} className={classes.textField} InputLabelProps={{shrink: true, }} onChange={(e) => setPostData({ ...postData, createdAt: e.target.value })}/>
          </Box>
        </Paper>
        <IconButton className={classes.buttonSubmit} variant="contained" color="primary" type="submit">
          <MonetizationOnIcon style={{fontSize: '2.6rem'}}></MonetizationOnIcon>
        </IconButton> 
      </form>
  );
};

export default Form;