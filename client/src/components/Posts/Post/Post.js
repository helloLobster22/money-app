import React from 'react';
import { Button } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const today = moment(post.createdAt).format("DD.MM.YYYY");
  
  return (
    <TableRow>
      <TableCell align="left">{today}</TableCell>
      <TableCell align="center">{post.money}</TableCell>
      <TableCell align="left">{post.category}</TableCell>
      <TableCell align="left" style={{maxWidth: '35px', overflow: 'auto'}}>{post.comment}</TableCell>
      <TableCell align="center">
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /></Button>
      </TableCell>
    </TableRow>
  );
};

export default Post;