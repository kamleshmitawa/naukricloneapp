import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Header } from './components/Header'
import { Default } from "./components/Default/Default";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { routePath } from "./routes/routePath";
import { SignUp } from "./components/Login/SignUp";
import { Forgot } from "./components/Login/Forgot";
import { ResetPassword } from "./components/Login/ResetPassword";
import { PostedJobs } from "./components/Jobs/PostedJobs";

import './global.css';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router history={useHistory()}>
        <div className="main-container">
          <Header />
          <Switch>
            <Route exact component={Home} path={routePath.root} />
            <Route exact component={Home} path={routePath.home} />
            <Route exact component={Login} path={routePath.login} />
            <Route exact component={SignUp} path={routePath.signUp} />
            <Route exact component={Forgot} path={routePath.forgot} />
            <Route exact component={ResetPassword} path={routePath.reset} />
            <Route exact component={PostedJobs} path={routePath.jobsPosted} />
            <Route path={routePath.logout} component={Login} />
            <Route component={Default} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
