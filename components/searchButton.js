//custom html element for the search Button
const template = document.createElement("template");

template.innerHTML = `
<style>
  * {
    box-sizing: border-box;
  }
        
  .header__button {
    background-color: rgba(var(--color-force-light), 0.1);
    transition: background-color 0.1s;
    border-width: 0;
    border-radius: 6px;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    margin-right: 0.25rem;
  }

  .header__button:hover {
    background-color: rgba(var(--color-force-light), 0.2);
  }

  .header__button:active {
    background-color: rgba(var(--color-force-light), 0.3);
  }

    
</style>

<button class="header__button"> 
    <slot name="svg"></slot>
    <slot name="path"></slot>
</button>
`;

class SearchButton extends HTMLElement {
  inner = this.attachShadow({ mode: "closed" });
  constructor() {
    super();
    const { content } = template;
    this.inner.appendChild(content.cloneNode(true));
  }
}

customElements.define("search-button", SearchButton);
