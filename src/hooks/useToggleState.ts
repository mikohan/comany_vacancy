import { useState } from 'react';

function useToggle(initialVal: boolean = false): any[] {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useToggle;
