let loadScript = (src) => {
    return new Promise(function(resolve, reject) {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Custom Element V1 feature detection
const supportsCustomElementsV1 = 'customElements' in window;
if (!supportsCustomElementsV1) {
    loadScript('/bower_components/custom-elements/custom-elements.min.js').then(function(){
        console.log('Polyfill customElements loaded.')
    });
} else {
    console.log('Native customElements support. Good to go.')
}

// Shadow DOM V1 feature detection
const supportsShadowDOMV1 = !!HTMLElement.prototype.attachShadow;
if (!supportsShadowDOMV1) {
    loadScript('/bower_components/shadydom/shadydom.min.js')
        .then(e => loadScript('/bower_components/shadycss/shadycss.min.js'))
        .then(e => {
        console.log('Polyfill ShadowDOM loaded.')
    });
} else {
    console.log('Native shadow dom v1 support. Go to go!')
}

// HTML import feature detection
const supportsHTMLImport = 'import' in document.createElement('link');
if (!supportsHTMLImport) {
    loadScript('/bower_components/webcomponentsjs/HTMLImports.js').then(e => {
        console.log('Polyfill HTMLImport loaded.')
    });
} else {
    console.log('Native HTMLImport support. Good to go.')
}