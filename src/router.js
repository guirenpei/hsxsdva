import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Admin from './components/Admin/Admin';
import Member from './components/Member/Member';
import MemberInfo from './components/Member/MemberInfo';
import MemberRecord from './components/Member/MemberRecord';
import MemberCard from './components/Member/MemberCard';
import MemberPassword from './components/Member/MemberPassword';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/member" component={Member} >
        <IndexRoute component={MemberInfo} />
        <Route path="/member/record" component={MemberRecord} />
        <Route path="/member/card" component={MemberCard} />
        <Route path="/member/password" component={MemberPassword} />
        {/* <IndexRoute component={Home} />
        <Route path="type(/:keyword)" component={Type} />
        <Route path="rank(/:keyword)" component={Rank} />
        <Route path="/story/shelf(/:username)" component={Shelf} />
        <Route path="/story/summary/:_id" component={Summary} />
        <Route path="/story/catelog/:_id" component={Catelog} />
        <Route path="/story/search(/:storyname)" component={Search} />
        <Route path="/story/content/(:link)" component={Content} /> */}
      </Route>
    </Router>
  );
}

export default RouterConfig;
