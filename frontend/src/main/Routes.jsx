import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import UserCrud from '../components/user/UserCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>