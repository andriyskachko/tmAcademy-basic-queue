function Ticket(ticket) {
  const ticketEl = document.createElement('div');
  ticketEl.textContent = ticket;
  ticketEl.className = 'ticket';
  return ticketEl;
}

function Banner(text) {
  const banner = document.createElement('div');
  banner.className = 'centered-no-flow';
  banner.textContent = text;
  return banner;
}

export default class View {
  constructor() {
    this.queue = document.querySelector('.terminal__queue');
    this.currentTicket = document.querySelector('.terminal__current-ticket');
    this.checkInput = document.querySelector('#check-in');
    this.checkInBtn = document.querySelector('[data-btn="in"]');
    this.checkOutBtn = document.querySelector('[data-btn="out"]');
  }

  displayTickets(queue) {
    if (!queue.length) {
      this.queue.append(Banner('No one in queue yet, be first!'));
      return;
    }

    while (this.queue.firstChild) {
      this.queue.removeChild(this.queue.firstChild);
    }

    queue.forEach((ticket) => {
      this.queue.append(Ticket(ticket));
    });

    this.currentTicket.textContent = `Ticket # ${queue.head}`;
  }
}
