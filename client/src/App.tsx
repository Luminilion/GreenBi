import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import MainPage from './pages/MainPage';
import Stocks from './pages/stocks/Stocks';
import Royalties from './pages/royalties/Royalties';
import Portfolio from './pages/Portfolio';
import Academy from './pages/academy/Academy';
import Settings from './pages/Settings';
import Investir from './pages/Investir';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import ProjectDetail from './pages/ProjectDetail';
import Contract from './pages/Contract';
import AdministrativeDocument from './pages/AdministrativeDocument';
import MainMenu from './components/utils/MainMenu';
import LeveeFond from './pages/LeveeFond';
import PortfolioDetail from './pages/PortfolioDetail';
import PersonalInfo from './pages/PersonalInfo';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <MainMenu />

        <IonRouterOutlet id="main">
          <Route path="/login" component={Login} exact={true} />
          <Route path="/signup" component={Signup} exact={true} />

          <Route path="/main" component={MainPage} exact={true} />

          <Route path="/stocks" component={Stocks} exact={true} />
          <Route path="/royalties" component={Royalties} exact={true} />

          <Route path="/project-detail/:projectType/:projectId" component={ProjectDetail} exact={true} />

          <Route path="/portfolio" component={Portfolio} exact={true} />
          <Route path="/portfolio-detail" component={PortfolioDetail} exact={true} />
          <Route path="/academy" component={Academy} exact={true} />
          <Route path="/settings" component={Settings} exact={true} />

          <Route path="/investir" component={Investir} exact={true} />
          <Route path="/payment/:projectType/:projectId/:amount" component={Payment} exact={true} />
          <Route path="/payment-success/:projectType/:projectId/:amount" component={PaymentSuccess} exact={true} />
          <Route path="/contrat/:projectType/:projectId/:amount" component={Contract} exact={true} />
          <Route path="/document-administratif/:projectType/:projectId/:amount" component={AdministrativeDocument} exact={true} />
          <Route path="/levee-fond/:projectType/:projectId" component={LeveeFond} exact={true} />
          <Route path="/info-personnelle/:projectType/:projectId/:amount" component={PersonalInfo} exact={true} />
          <Route path="/contract" component={Contract} exact={true} />
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
