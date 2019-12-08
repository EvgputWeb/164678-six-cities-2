import React from 'react';
import {Link} from 'react-router-dom';


const Page404 = () => {
  return (
    <React.Fragment>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to={`/`}>Go to main page &gt;&gt;&gt;</Link>
    </React.Fragment>
  );
};

export default Page404;
