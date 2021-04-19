import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CreatePostForm from './components/posts/CreatePostForm';
import Posts from './components/posts/Posts';
import Login from './components/authorization/Login/Login';
import Signup from './components/authorization/Signup/Signup';
import Categories from './components/categories/Categories';
import ContactForm from './components/ContactForm';
import ReactNotifications from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import Trending from './components/Trending';
import CreateCategory from './components/categories/CreateCategory';

function App() {
  

  return (
    
    <BrowserRouter>
    <ReactNotifications />
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/createPost" component={CreatePostForm}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/home" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/contactUs" component={ContactForm}/>
          <Route path="/trending" component={Trending}/>
          <Route path="/createCategory" component={CreateCategory}/>
          

        </Switch>

      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
