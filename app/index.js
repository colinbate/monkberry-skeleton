import Monkberry from 'monkberry';
import Template from './template.monk';

document.addEventListener('DOMContentLoaded', function() {
  const view = Monkberry.render(Template, document.body);
  view.update({name: 'World'});
});
