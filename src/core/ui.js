export const UI = {
    get(id) {
        return document.getElementById(id);
    },

    setHTML(id, html) {
        const el = this.get(id);
        if (el) el.innerHTML = html;
    },

    showMessage(msg, type = 'info') {
        alert(msg); // pode ser melhorado com um toast
    }
};