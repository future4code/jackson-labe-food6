import { useLayoutEffect } from 'react';
import { goToFeed} from '../routes/Coordinator';
import { useHistory } from 'react-router-dom';

const useProtectPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToFeed(history)
    }
  }, [history])
}

export default useProtectPage
