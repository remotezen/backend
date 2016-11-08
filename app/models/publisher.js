import DS from 'ember-data';

export default DS.Model.extend({
  name: attr('string'),
  discount: attr('number'),
  published: hasMany('book')

});
