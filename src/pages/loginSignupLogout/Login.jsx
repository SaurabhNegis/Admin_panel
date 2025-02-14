import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

// preview-start
// preview-start
const BRANDING = {

  title: 'Admin Dashboard',
};

const providers = [{ id: 'credentials', name: 'Email and Password' }];
// preview-end

const signIn = async (provider, formData) => {
  // Removed alert to skip the popup
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 200);
  });
  return promise;
};

export default function CredentialsSignInPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  // Temporary email and password values
  const temporaryEmail = 'user@example.com';
  const temporaryPassword = 'password123';

  // Redirect to homepage after signing in
  const handleSignIn = async (provider, formData) => {
    await signIn(provider, formData);
    navigate('/');
  };

  return (
    // preview-start
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage
        signIn={handleSignIn}
        providers={providers}
 
      />
    </AppProvider>
    // preview-end
  );
}
