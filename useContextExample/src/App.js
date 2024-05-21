/*

  In this example, the App component holds a state variable which is then passed to the ThemeContext provider. Checking the “Dark mode” checkbox updates the state.
  Changing the provided value re-renders all the components using that context.

*/

import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import Form from './Form';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('grey');
  return (
    <ThemeContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <Form />
    </ThemeContext.Provider>
  );
}

export default App;
