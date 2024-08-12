import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-ui-button')
export class Button extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      background: blue;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'World';

  // Render the UI as a function of component state
  render() {
    return html`<button>Hello, ${this.name}!</button>`;
  }
}
