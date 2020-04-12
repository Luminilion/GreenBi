import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import MainPage from './pages/MainPage';
import Stocks from './pages/Stocks';
import Royalties from './pages/Royalties';
import Investir from './pages/Investir';

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
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/main" component={MainPage} exact={true} />
          <Route path="/stocks" component={Stocks} exact={true} />
          <Route path="/royalties" component={Royalties} exact={true} />
          <Route path="/investir" component={Investir} exact={true} />
          <Route path="/" render={() => <Redirect to="/main" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="main" href="/main">
            <IonIcon icon={triangle} />
            <IonLabel>Main Page</IonLabel>
          </IonTabButton>
          <IonTabButton tab="stocks" href="/stocks">
            <IonIcon icon={ellipse} />
            <IonLabel>Stocks</IonLabel>
          </IonTabButton>
          <IonTabButton tab="royalties" href="/royalties">
            <IonIcon icon={square} />
            <IonLabel>Royalties</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
