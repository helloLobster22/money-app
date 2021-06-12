import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';


import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId, currentMonth }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  const currentPosts = [];
  posts.map((post) => { if(moment(post.createdAt).format('M') == currentMonth) { currentPosts.push(post) } });

  return (
    <TableContainer component={Paper} className={classes.postsLayout}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor: "#dfdfdf"}}>
            <TableCell align="left" style={{fontWeight: "800"}}>Date</TableCell>
            <TableCell align="center" style={{fontWeight: "800"}}>Money</TableCell>
            <TableCell align="left" style={{fontWeight: "800"}}>Category</TableCell>
            <TableCell align="left" style={{fontWeight: "800"}}>Comment</TableCell>
            <TableCell align="center" style={{fontWeight: "800"}}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          currentPosts.map((post) => (<Post post={post} setCurrentId={setCurrentId} />))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Posts;