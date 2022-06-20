function TerminalContainer() {
  const container = document.createElement('div');
  container.className = 'terminal';
  return container;
}

function TerminalHeading(text) {
  const heading = document.createElement('h1');
  heading.textContent = text;
  heading.className = 'terminal__heading';
  return heading;
}

function TerminalStatus() {
  const status = document.createElement('div');
  status.className = 'terminal__status';
  return status;
}

function TerminalActionsContainer() {
  const container = document.createElement('div');
  container.className = 'terminal__actions';
  return container;
}

function QueueContainer() {
  const container = document.createElement('div');
  container.className = 'terminal__queue';
  return container;
}

function CheckInForm() {
  const form = document.createElement('form');
  const heading = document.createElement('h2');
  const input = document.createElement('input');
  const submitBtn = document.createElement('button');
  const submitBtnText = document.createElement('div');

  form.className = 'terminal__action';
  form.id = 'check-in-form';
  heading.className = 'terminal__action-heading';
  heading.textContent = 'Check-In';
  input.type = 'text';
  input.inputMode = 'numeric';
  input.placeholder = 'Your ticket number';
  input.name = 'ticket';
  input.required = true;
  input.maxLength = 6;
  submitBtn.type = 'submit';
  submitBtn.className = 'terminal__btn';
  submitBtnText.textContent = 'Enter';
  submitBtnText.className = 'terminal__btn__text';

  submitBtn.append(submitBtnText);
  form.append(heading, input, submitBtn);

  return form;
}

function CurrentTicketContainer() {
  const container = document.createElement('div');
  container.className = 'terminal__current-ticket-container';
  return container;
}

function CurrentTicketHeading() {
  const heading = document.createElement('div');
  heading.className = '';
  heading.textContent = 'Current Ticket:';
  return heading;
}

function CurrentTicket() {
  const container = document.createElement('div');
  container.className = 'terminal__current-ticket';
  return container;
}

function CheckOutContainer() {
  const container = document.createElement('div');
  const heading = document.createElement('h2');
  container.className = 'terminal__action';
  heading.className = 'terminal__action-heading--reverse';
  heading.textContent = 'Check-Out';
  container.append(heading);
  return container;
}

function CheckOutBtn() {
  const btn = document.createElement('button');
  const btnText = document.createElement('div');

  btn.className = 'terminal__btn';
  btn.type = 'button';
  btnText.textContent = 'Get through';

  btn.append(btnText);

  return btn;
}

function Ticket(text) {
  const ticket = document.createElement('div');
  ticket.className = 'ticket';
  ticket.textContent = text;
  return ticket;
}

export {
  TerminalContainer,
  TerminalHeading,
  CheckOutContainer,
  CurrentTicketHeading,
  CurrentTicketContainer,
  TerminalStatus,
  QueueContainer,
  CheckInForm,
  CurrentTicket,
  CheckOutBtn,
  Ticket,
  TerminalActionsContainer,
};
