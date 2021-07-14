// * MODULES
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// * COMPONENTS
import Navigation from '../Navigation/Navigation';
import Home from '../../Views/Home/Home';
import Add from '../../Views/Add/Add';
import { DataProvider } from "../../Tools/Context/DataContext";

// * CONTENT
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <DataProvider>
        <Switch>
          <Route exact path="/addnewmovie" component={Add} />
          <Route path="/" component={Home} />
          {/* <Route path="*" render={() => <Redirect to="/" />} /> */}
        </Switch>
        </DataProvider >

      </BrowserRouter>
    </div>
  );
}

export default App;