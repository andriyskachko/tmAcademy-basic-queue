export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindEnqueue(this.handleEnqueue);
    this.view.bindDequeue(this.handleDequeue);
    this.onChange();
  }

  onChange = () => {
    this.view.displayStatus(this.model.status);
    this.view.displayCurrentTicket(this.model.peek());
    this.view.displayQueue(this.model.queue);
  };

  handleEnqueue = (data) => {
    this.model.enqueue(data);
    this.onChange();
  };

  handleDequeue = () => {
    this.model.dequeue();
    this.onChange();
  };
}
