import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Rout, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from './components/Progress';
import Header from './components/Header';

const Marketing = lazy(() => import('./components/MarketingApp'));
const Auth = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

function App() {
   const [isSignedIn, setIsSignedIn] = useState(false);
  
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header  onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
               <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={Marketing} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
