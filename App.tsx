import { Home } from './src/pages/Home';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar 
        style="light"
        translucent={true}
        
        animated={true}
      />
      <Home/>
    </>
  );
}