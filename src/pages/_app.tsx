import type { AppProps } from 'next/app'
import '../../styles/style.scss';

import Layout from 'src/pages/layout';
import {appWithTranslation} from "next-i18next";
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {isProduction} from "configs/properties";
import reducers from "src/reducers";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(reducers);


if(!isProduction && (typeof window !== "undefined")){
    store = createStoreWithMiddleware(
        reducers,
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
  )
}

export default appWithTranslation(App);