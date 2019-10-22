import React from 'react';
//dit is om errors te voorkomen, zodat er altijd een lege functie is, zelfs wanneer er geen default wordt geinitaliseerd
const LoggedOnContext = React.createContext('', () => {});
export default LoggedOnContext;
