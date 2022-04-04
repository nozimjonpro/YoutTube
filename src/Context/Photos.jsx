import React from "react";

const Context = React.createContext([]);

function Provider({children}){
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setPhotos(data);
          }
        });
    }, []);

    return <Context.Provider value={{photos, setPhotos}}>{children}</Context.Provider>
}

export {Context, Provider};