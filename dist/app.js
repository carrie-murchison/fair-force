"use strict";
console.log("Fair Force QA");
window.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    const header = document.createElement('header');
    header.innerHTML = '<h1>Welcome to Fair Force QA</h1>';
    container.appendChild(header);
    const intro = document.createElement('p');
    intro.innerText = 'We are a company that provides quality assurance software testing using the latest technologies and trends. Our QA engineers are a network of justice impacted career starters who have the support of professional mentors to ensure the quality of the tests they perform.';
    container.appendChild(intro);
    const callToAction = document.createElement('p');
    callToAction.innerHTML = 'If you\'re interested in learning more about our services or joining our team, please contact us at <a href="mailto:info@fairforceqa.com">info@fairforceqa.com</a>.';
    container.appendChild(callToAction);
});
