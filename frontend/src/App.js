import { PureComponent} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/shared/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeContainer } from './components/Home';
import { MealsListContainer } from './components/MealsList';
import { CheckoutContainer } from './components/Checkout';
import store from './redux/store/configureStore';
import { Provider } from 'react-redux'
import "./App.scss";
import "./index.scss";


class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="display-flex-col">
            <Navigation />
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/mealsList" component={MealsListContainer} />
              <Route path="/checkout" component={CheckoutContainer} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
