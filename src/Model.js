export default class Model {
  constructor() {
    this.queue = localStorage.getItem('queue') || [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    return this.queue.shift();
  }

  get length() {
    return this.queue.length;
  }

  get head() {
    return this.queue[0];
  }

  get tail() {
    return this.queue[this.length];
  }

  commit() {
    localStorage.setItem('queue', JSON.stringify(this.queue));
  }
}
