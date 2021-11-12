import React from 'react';
import {
  Switch,
  Route
} from 'react-router';
import Login from './components/login/login';
import Items from './components/items/items';
import ItemInner from './components/itemInner/itemInner';
import { useSelector } from 'react-redux';
import { getLoading } from './store/loading/selectors';
import { Backdrop, CircularProgress } from '@mui/material';
import useGetList from './hooks/useGetList';


export default function App() {
  useGetList(10);
  const loading = useSelector(getLoading);

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: 900 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Switch>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/items'} component={Items} />
        <Route exact path={'/items/:id'} component={ItemInner} />
        <Route path={'*'} component={Login} />
      </Switch>
    </>
  );
}