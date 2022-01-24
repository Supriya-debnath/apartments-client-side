import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Contexts/AuthProvider';
import About from './Components/Pages/About/About';
import Apartments from './Components/Pages/Apartments/Apartments';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Footer from './Components/Pages/Home/Footer/Footer';
import Header from './Components/Pages/Home/Header/Header';
import Home from './Components/Pages/Home/Home/Home';
import Booking from './Components/Pages/Login/Booking/Booking';
import Login from './Components/Pages/Login/Login/Login';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Components/Pages/Login/Register/Register';
import NotFound from './Components/Pages/NotFound/NotFound';

export const UserContext=createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({});

  return (
      <UserContext.Provider value={{loggedInUser, setLoggedInUser, cart, setCart}}>
        <div className="App">
         
         <AuthProvider>
         <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/apartments">
                <Apartments></Apartments>
              </Route>
              <Route path="/blog">
                <Blog></Blog>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path="/booking/:id">
           <Booking></Booking>
         </PrivateRoute>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </BrowserRouter>
         </AuthProvider>
    </div>
      </UserContext.Provider>
  );
}

export default App;
