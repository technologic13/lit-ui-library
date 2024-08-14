import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
@customElement('lit-ui-button')
export class Button extends LitElement {
  static styles = css`
    .button-lit {
      background-color: #007bff; // Bootstrap primary blue
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3; // Darker blue on hover
      }

      &:active {
        background-color: #004085; // Even darker blue on active
      }

      &:disabled {
        background-color: #cccccc; // Grey when disabled
        cursor: not-allowed;
      }
    }
  `;
  // Declare reactive properties
  @property()
  name?: string = 'World';
  @property()
  styles?: string;

  // Render the UI as a function of component state
  render() {
    return html`<style>
        ${this.styles}</style
      ><button class="button-lit">Hello, ${this.name}!</button>`;
  }
}
