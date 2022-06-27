import routes from './routes';
import * as View from '../views';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouterView = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route
            path={routes.default}
            element={
              process.env.REACT_APP_IN_MAINTENACE === 'true' ? (
                <View.InMaintenance />
              ) : (
                <View.Home />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default RouterView;
