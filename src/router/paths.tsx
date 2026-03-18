import AOS from 'aos';
import 'aos/dist/aos.css';
import routes from './routes';
import * as View from '../views';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '../contexts/LanguageContext';

AOS.init();

const RouterView = () => {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
};

export default RouterView;
