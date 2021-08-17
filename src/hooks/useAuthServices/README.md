# Firebase Auth services

## Usage
```js
import { Button } from '@qonsoll/react-design'
// You have several options how to import this hook
// Using named export from auth 'subpackage' <- preferred variant
import { useAuthServices } from '@qonsoll/firebase-services/auth'

// Using default export from 'subpackage' index.
// import useFirebaseAuthServices from '@qonsoll/firebase-services/auth'

// Using named export from main library index.
// import { useAuthServices } from '@qonsoll/firebase-services'

const LoginWithGoogleButton = () => {
  // [ADDITIONAL_HOOKS]
  const { loginWithGoogle } = useAuthServices()
  
  // This button will trigger google login with redirect.
  return (
  	<Button
          icon={<GoogleOutlined />} 
          size="large"
          onClick={loginWithGoogle}
          block>
        Login with google
	</Button>
  )
}
```
