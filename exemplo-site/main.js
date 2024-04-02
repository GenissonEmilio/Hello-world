class Site {
  constructor(body) {
    this.body = body;
  }
  
  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('mainDiv');
    this.element.innerHTML = ('<p>Testando</p>');
  }
  
  init() {
    this.createElement();
    this.body.appendChild(this.element);
  }
}