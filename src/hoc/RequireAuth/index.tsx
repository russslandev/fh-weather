import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { RequireAuthProps } from 'types';

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const someAuthLogic = false;

  if (someAuthLogic) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default RequireAuth;
