import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout'
import About from './scenes/About'
import Home from './scenes/Home'
import Services from './scenes/Services'
import './styles/_main.scss'

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/about">
           <About/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          {/* 404 page */}
          <Route path="*">
            <h2>Sorry page could not be found</h2>
          </Route>
        </Switch>
      </Layout>
    </>

  );
}

export default App;
