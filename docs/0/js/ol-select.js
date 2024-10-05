;(function(){
class OlSelect extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        console.log('connectedCallback:', this)
        console.log(this.querySelectorAll('li'))
        this._shadowRoot = this.attachShadow({mode:'open'});
        console.log(this.querySelectorAll('li'))
        console.log(this._shadowRoot.querySelectorAll('li'))
        console.log(document.querySelectorAll('ol-select > li'))
    }
    disconnectedCallback() {
        console.log('disconnectedCallback')

    }
    attributeChangedCallback(name, oldValue, newValue) {

        console.log('attributeChangedCallback:', name, oldValue, newValue)
    }
    static get observedAttributes() { return [] }
    adoptedCallback() {
        console.log('adoptedCallback')
    }
    #render() {
        
    }
    #makeUl() {
        this.querySelectorAll('li')
        this.#makeEl('ul')
        this._shadowRoot.appendChild()
        const ul = document.createElement('ul')
        return 
    }
    #makeEl(name, attrs, children) {
        const el = document.createElement(name)
        for (let [k,v] of Object.entries(attrs)) {
            if ('class'===k) {this.#addClass(el, v)}
            else {el[key] = v}
        }
        this.#addChildren(el, children)
    }
    #addClass(el, v) {
        if ('string'===typeof v || v instanceof String) {v.split(' ').map(c=>el.classList.add(c))}
        else if(Array.isArray(v) && v.every(V=>'string'===typeof V || V instanceof String)){v.map(V=>el.classList.add(V))}
        else{throw new TypeError(`vは文字列かその配列であるべきです。`)}
    }
    #addChildren(el, v) {
        if (null===el || undefined===el){return}
        else if(Array.isArray(v)){el.append(...v)}
        else{el.append(v)}
    }
}
customElements.define('ol-select', OlSelect);
})();
