/**
 * Product Grid Custom Web Component
 * <product-grid>
 */
if (!customElements.get('product-grid')) {
  class ProductGrid extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.init();
    }

    init() {
      // Setup accessibility and grid attributes
      this.setAttribute('role', 'region');
      if (!this.getAttribute('aria-label')) {
        this.setAttribute('aria-label', 'Product Grid');
      }

      // Check overflow for smooth horizontal touch scroll on small devices if needed
      this.updateLayout();
      window.addEventListener('resize', this.debounce(() => this.updateLayout(), 150));
    }

    updateLayout() {
      const isMobile = window.innerWidth <= 767;
      this.dataset.isMobile = isMobile;
    }

    debounce(fn, delay) {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
      };
    }
  }

  customElements.define('product-grid', ProductGrid);
}

