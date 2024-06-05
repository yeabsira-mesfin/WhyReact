
import Header from "./componenets/Header/Header";
import React from "react";
import CoreConcepts from "./componenets/CoreConcepts";
import Examples from "./componenets/Examples";

function App() {
  
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
