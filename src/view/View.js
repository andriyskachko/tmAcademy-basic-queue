import {
  CheckInForm,
  CheckOutBtn,
  CurrentTicket,
  CheckOutContainer,
  QueueContainer,
  TerminalContainer,
  TerminalHeading,
  TerminalStatus,
  CurrentTicketHeading,
  CurrentTicketContainer,
  Ticket,
  TerminalActionsContainer,
} from './Terminal';

export default class View {
  constructor() {
    this.root = document.querySelector('#root');
    this.terminalContainer = TerminalContainer();
    this.terminalHeading = TerminalHeading('Gate ABC');
    this.terminalStatus = TerminalStatus();
    this.queueContainer = QueueContainer();
    this.terminalActionsContainer = TerminalActionsContainer();
    this.checkInForm = CheckInForm();
    this.currentTicketContainer = CurrentTicketContainer();
    this.currentTicketHeading = CurrentTicketHeading();
    this.currentTicket = CurrentTicket();
    this.checkOutContainer = CheckOutContainer();
    this.checkOutBtn = CheckOutBtn();

    this.terminalActionsContainer.append(this.checkInForm, this.checkOutContainer);
    this.currentTicketContainer.append(this.currentTicketHeading, this.currentTicket);
    this.checkOutContainer.append(this.currentTicketContainer, this.checkOutBtn);

    this.terminalContainer.append(
      this.terminalHeading,
      this.terminalStatus,
      this.queueContainer,
      this.terminalActionsContainer,
    );
    this.root.append(this.terminalContainer);
  }

  displayCurrentTicket(ticket) {
    this.currentTicket.textContent = ticket || 'Be first in queue';
  }

  displayStatus(status) {
    if (status === 'Closed') this.terminalStatus.classList.add('danger');
    else this.terminalStatus.classList.remove('danger');
    this.terminalStatus.textContent = status;
  }

  displayQueue(queue) {
    while (this.queueContainer.firstChild) {
      this.queueContainer.removeChild(this.queueContainer.firstChild);
    }

    if (queue.length) {
      queue.forEach((ticket) => {
        this.queueContainer.append(Ticket(ticket));
      });
    } else {
      this.queueContainer.append('No tickets yet');
    }
  }

  bindEnqueue(handler) {
    this.checkInForm.addEventListener('input', View.formatTicket);
    this.checkInForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(this.checkInForm);
      handler(formData.get('ticket'));
      this.checkInForm.reset();
    });
  }

  bindDequeue(handler) {
    this.checkOutBtn.addEventListener('click', handler);
  }

  static formatTicket(event) {
    const ticket = event.target;
    const ticketVal = ticket.value;
    ticket.setCustomValidity('');

    if (!/^\d+$/.test(ticketVal)) {
      ticket.setCustomValidity(
        'There are no letters or special characters in ticket number',
      );
      ticket.reportValidity();
    }
  }
}
