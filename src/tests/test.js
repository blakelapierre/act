import blact from '../blact';

const {render, b} = blact(document);

const list = b('ul', {}, ...[1, 2, 3, 4].map(i => b('li', {}, i)));

document
  .addEventListener('DOMContentLoaded', () =>
    render(document.getElementsByTagName('root')[0],
      b('span',
        {onclick: () => alert('click')},
        b('subspan', {'class': 'wut'}, 'click here!'),
        list
        )));