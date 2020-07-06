import React                      from "react";
import { Router, Route, Switch }  from "react-router-dom";

import StreamCreate               from "./Components/StreamCreate/StreamCreate";
import StreamList                 from "./Components/StreamList/StreamList";
import StreamEdit                 from "./Components/StreamEdit/StreamEdit";
import StreamDelete               from "./Components/StreamDelete/StreamDelete";
import StreamShow                 from "./Components/StreamShow/StreamShow";
import Header                     from "./Components/Header/Header";
import History                    from "./Components/History/History";


function App() {

  return (
    <div className="app">
      <Router history={History}>
        <div className="">
          <Switch>
            <Route path="/" component={Header} />
          </Switch>
          <div className="ui container">
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route
                path="/streams/delete/:id"
                exact
                component={StreamDelete}
              />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
  
}

export default App;
