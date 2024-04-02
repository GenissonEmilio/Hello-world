class site {
  constructor(body) {
    this.body = body;
  }
  
  createElement() {
    this.element = document.createElement('div');
    this.element.appendChild(this.body);
  }
  
  init() {
    this.createElement();
  }
}