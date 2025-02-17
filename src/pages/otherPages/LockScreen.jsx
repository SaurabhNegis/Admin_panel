import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

// Styled to Card
const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

// styled to the LockScreenContainer
const LockScreenContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  minHeight: '100%',
  padding: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function LockScreen() {
  const navigate = useNavigate();

  // States for managing the input field and error handling
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic password validation (for demo purposes)
    if (password === '123456') {
      navigate('/'); // Redirect to the home page after successful unlock
    } else {
      setPasswordError(true);
      setErrorMessage('Incorrect password. Please try again.');
    }
  };

  return (
    <LockScreenContainer>
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          Lock Screen
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            required
            fullWidth
            id="password"
            type="password"
            label="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={passwordError ? errorMessage : ''}
            color={passwordError ? 'error' : 'primary'}
            autoComplete="new-password"
            variant="outlined"
          />

          <Button type="submit" fullWidth variant="contained">
            Unlock
          </Button>
        </Box>
      </Card>
    </LockScreenContainer>
  );
}
