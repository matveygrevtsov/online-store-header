import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header
        items={[
          {
            label: "ONLINE-SHOP",
            key: "ONLINE-SHOP",
          },
        ]}
      />
    </BrowserRouter>
  );
};
