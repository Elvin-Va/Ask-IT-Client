import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './utils/history';
import PrivateRoute from './utils/PrivateRoute';
import LoginPageView from './Containers/LoginPageView';
import RegisterPage from './Containers/RegisterPage';
import HomePage from './Containers/HomePage';
import QuestionPage from './Containers/QuestionPage';
import MyQuestionsPage from './Containers/MyQuestionsPage';
import ProfilePage from './Containers/ProfilePage';
import NavBar from './Containers/NavBar';

function App() {
  return (
    <Router history={history}>
      <div className="container mt-5">
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route path="/question/:id" component={QuestionPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPageView} />
        <PrivateRoute path="/myQuestions" component={MyQuestionsPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
      </div>
    </Router>
  );
}

export default App;
