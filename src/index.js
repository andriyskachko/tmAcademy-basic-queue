import './sass/main.scss';
import Controller from './Controller';
import Model from './Model';
import View from './view/View';

const app = new Controller(new Model(), new View());
