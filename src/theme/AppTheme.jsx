import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function AppTheme(props) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          // Use Material UI's default theme.
          components: {
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node,
  /**
   * Optionally disable the custom theme.
   */
  disableCustomTheme: PropTypes.bool,
  /**
   * Additional theme component overrides.
   */
  themeComponents: PropTypes.object,
};

export default AppTheme;
