import React from 'react';
import MyComponent from '../MyComponent';

export default () => {
  // The following code should fail the type check
  return <MyComponent wrongProp1={[]} wrongProp2={false} />;
};
