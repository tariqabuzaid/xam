import React from 'react';

const FormError = ({ error, style }: { error: string; style?: string }) => {
  const extraStyle = style ? ' alert alert-danger mt-2 p-2 text-center' : '';
  return <div className={`text-danger ${extraStyle}`}>{error}</div>;
};

export default FormError;
