import React, { Suspense } from "react";
// For Redux
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from "react-router-dom";
const Routes = React.lazy(() => import("./routing/Routes"));

function App() {
  return (
    <Provider store={store}>
    <Suspense
      fallback={
        <div>
          <p>Loading..</p>
        </div>
      }
    >
      <Router>
        <Route component={Routes} />
      </Router>
    </Suspense>
    </Provider>
  );
}

export default App;
