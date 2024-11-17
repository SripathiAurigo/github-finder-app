import React from 'react';
import spinnergif from './assets/spinnergif.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img src={spinnergif} alt='Loading...' width={180} className='text-center mx-auto' />
    </div>
  );
}

export default Spinner;
