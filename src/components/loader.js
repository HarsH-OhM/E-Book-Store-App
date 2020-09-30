  

import React from "react";

const Loader =  ({ loading, children}) => {
  return (
    <>
      {loading && (
        <div
          style={{
            color: "green",
            textalign: "center",
            padding: "20px 0"
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Loader;