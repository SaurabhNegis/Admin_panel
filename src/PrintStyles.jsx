import { GlobalStyles } from '@mui/material';

const PrintStyles = () => (
  <GlobalStyles
    styles={{
      '@media print': {
        '.no-print': {
          display: 'none !important',
        },
      },
    }}
  />
);


export default PrintStyles