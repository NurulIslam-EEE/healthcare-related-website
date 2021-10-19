import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>

            <PrivateRoute path='/service/:Id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
