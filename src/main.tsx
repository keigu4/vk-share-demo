import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import bridge from '@vkontakte/vk-bridge';

bridge
  .send('VKWebAppInit')
  .then((data) => console.log('VKWebAppInit', 'true', data))
  .catch(error => console.error('VKWebAppInit', 'false', error));

createRoot(document.getElementById('root')!).render(
    <App />
)
