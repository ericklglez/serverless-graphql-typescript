import * as React from 'react';
import * as ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import registerServiceWorker from './registerServiceWorker';
import {store} from './store';
import {Demo} from './containers/demo/Demo';

initReactFastclick();

const client = new ApolloClient({
    link: new HttpLink({uri: 'http://localhost:4000/api'}),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route
                                exact={true}
                                path="/"
                                component={Demo}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        </ApolloProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
