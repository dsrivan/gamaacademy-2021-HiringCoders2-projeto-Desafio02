import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/checkout' exact component={Checkout} />
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}