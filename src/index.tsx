import App from './App';
import ReactDOM from 'react-dom';
import 'src/utils/chart';
import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient, ApolloProvider, InMemoryCache,
} from "@apollo/client";

import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
