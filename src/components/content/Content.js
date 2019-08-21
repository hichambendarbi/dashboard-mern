import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={() => "Acceuil" } />
        <Route exact path="/Acceuil" component={() => "Acceuil" } />
        <Route exact path="/medecins" component={() => "Medecins" } />
        <Route exact path="/Pharmacie" component={() => "Pharmacie" } />
        <Route exact path="/Laboratoire" component={() => "Laboratoire" } />
        <Route exact path="/Utilisateurs" component={() => "Utilisateurs" } />
        <Route exact path="/Administrateurs" component={() => "Administrateurs" } />
        <Route exact path="/Analyses" component={() => "Analyses" } />
        <Route exact path="/Profile" component={() => "Profile" } />
              
      </Switch>
    </Container>
)
