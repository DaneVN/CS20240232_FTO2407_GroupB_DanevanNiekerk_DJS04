//custom html element for book preview
const template = document.createElement("template");

template.innerHTML = `
<style>
  .preview {
    border-width: 0;
    width: 100%;
    font-family: Roboto, sans-serif;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    border-radius: 8px;
    border: 1px solid rgba(var(--color-dark), 0.15);
    background: rgba(var(--color-light), 1);
    }

    @media (min-width: 60rem) {
    .preview {
        padding: 1rem;
    }
    }

    .preview_hidden {
    display: none;
    }

    .preview:hover {
    background: rgba(var(--color-blue), 0.05);
    }
</style>
<button class="preview">
    <div class="preview__image">
    <slot name="image"></slot>
  </div>
  <div class="preview__details">
    <slot name="title"></slot>
    <slot name="author"></slot>
    <slot name="info"></slot>
  </div>
</button>
`;
class BookPreview extends HTMLElement {
  constructor() {
    super();
  }
  #inner = this.attachShadow({ mode: "closed" });

  connectedCallback() {
    const node = template.content.cloneNode(true);
    this.#inner.appendChild(node);
  }
}

customElements.define("book-preview", BookPreview);
