import React from "react";
import { Toaster } from "react-hot-toast";
import { RoutesList } from "site-settings/routes";
import { GlobalStyle } from "style/global";

const App = () => {
  return (
    <>
      <RoutesList />
      <GlobalStyle />
      <Toaster />
    </>
  );
};

export default App;
