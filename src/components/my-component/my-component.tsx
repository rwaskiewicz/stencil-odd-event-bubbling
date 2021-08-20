import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "my-component",
  shadow: true
})
export class MyComponent {
  handleHostBlur(event: FocusEvent): void {
    console.log("my-component::host blur", event);
  }

  handleInputBlur(event: FocusEvent): void {
    console.log("my-component::input blur", event);
  }

  render() {
    return (
      <Host>
        <div onBlur={this.handleHostBlur}>
          <input onBlur={this.handleInputBlur} placeholder="focus here first" />
          <button>then click here</button>
        </div>
      </Host>
    );
  }
}
