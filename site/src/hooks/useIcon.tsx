import { useEffect, useState } from 'react'

import {
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export function useIcon(data: any) {
  const [icon, setIcon] = useState<any>("");

  useEffect(() => {
    if(data === "arrow") {
      setIcon(faArrowRight);
    }
  }, [data])


  return icon;
}
