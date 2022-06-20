import './sass/main.scss';
import Controller from './Controller';
import Model from './model/Model';
import View from './view/View';

const app = new Controller(new Model(), new View());
