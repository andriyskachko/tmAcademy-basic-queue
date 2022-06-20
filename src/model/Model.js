const MAX_LENGTH = 22;

export default class Model {
  constructor() {
    this.queue = JSON.parse(localStorage.getItem('queue')) || [];
    this.status = localStorage.getItem('status') || 'Boarding';
  }

  enqueue(data) {
    if (this.queue.length !== MAX_LENGTH) {
      this.queue.push(data);
      this.commit();
    } else throw new Error('Max length has been reached');
  }

  dequeue() {
    const item = this.queue.shift();
    this.commit();
    return item;
  }

  peek() {
    return this.queue[0];
  }

  commit() {
    localStorage.setItem('queue', JSON.stringify(this.queue));
    this.status = this.queue.length === MAX_LENGTH ? 'Closed' : 'Boarding';
    localStorage.setItem('status', this.status);
  }
}
