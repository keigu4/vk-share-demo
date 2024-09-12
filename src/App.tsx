import bridge from '@vkontakte/vk-bridge';
import { useCallback } from 'react';

function App() {

  const handleClick = useCallback(() => {
    void bridge.send('VKWebAppShare', { link: "https://vk.com/test_vkapp" })
    .then(data => console.log('VKWebAppShare', 'true', data))
    .catch(error => console.error('VKWebAppShare', 'false', error));
  }, [])

  return <button onClick={handleClick}>VKWebAppShare</button>
}

export default App
