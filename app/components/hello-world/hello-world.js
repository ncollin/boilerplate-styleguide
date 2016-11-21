var currentScript = document._currentScript || document.currentScript;

class helloWorld extends HTMLElement {
    constructor() {
        super();

        let shadowRoot = this.attachShadow({ mode: 'open' });
        const ownerDocument = currentScript.ownerDocument;
        const template = ownerDocument.querySelector('#hello-world');
        
        // Polyfill - Should be add by the task runner
        if(window.ShadyCSS) {
            ShadyCSS.prepareTemplate(template, 'hello-world');
        }   
             
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
}

customElements.define('hello-world', helloWorld);