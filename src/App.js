import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ItemList} />
        <Route path="/items/:id" component={ItemDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;