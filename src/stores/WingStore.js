import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';

class WingStore extends EventEmitter {
  constructor() {
    super();
    this.wings = [
      {wing: 1, visibility: false},
      {wing: 1, visibility: false},
      {wing: 2, visibility: false},
      {wing: 2, visibility: false},
      {wing: 3, visibility: false},
      {wing: 3, visibility: false},
      {wing: 4, visibility: false},
      {wing: 4, visibility: false},
      {wing: 5, visibility: false},
      {wing: 5, visibility: false},
      {wing: 6, visibility: false},
      {wing: 6, visibility: false},
      {wing: 7, visibility: false},
      {wing: 7, visibility: false},
      {wing: 8, visibility: false},
      {wing: 8, visibility: false},
    ];
  }


  getAll() {
    return this.wings;
  }

  handleAction(action){
  }

}

const wingStore = new WingStore;
dispatcher.register(wingStore.handleAction.bind(wingStore));
export default wingStore;
