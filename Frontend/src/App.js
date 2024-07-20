 import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from './components/Messanger';
import AccountProvider from './context/AccountProvider';
function App() {

  const clientId ='5653880957-4l2aknmh6e1u3nmfcpilip5h0ocfuhvt.apps.googleusercontent.com'
  return (
 <GoogleOAuthProvider clientId={clientId}>
   <AccountProvider>
   <Messenger/>
   </AccountProvider>
   
 </GoogleOAuthProvider>
    

         


  );
}

export default App;
