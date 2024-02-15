// import react to use jsx syntax
import React from 'react';
// import the header component from the components folder
import Header from './components/Header';
// import the footer component from the components folder
import Footer from './components/Footer';
// correctly importing contenta and contentb components
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';
// import the button component from sharedcomponents
import { Button } from './components/SharedComponents';


// define the app component
function App() {
  return (
    // div container for the app
    <div className="App">
      <Header />
      <ContentA />
      <Button label="Button A" />
      <ContentB />
      <Button label="Button B" />
      <Footer />
    </div>
  );
}

// export the app component as default
export default App;
