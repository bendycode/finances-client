import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  ajax: Ember.inject.service(),

  findAll: function(store, type, _sinceToken) {
    return this.get('ajax').request('http://localhost:3000/api/v1/employees');

    /*
    return [
      {
        id: 32,
        name: "Donald"
        
      },
      {
        id: 456,
        name: "Joey"
      }
    ]; 
    */
  }
});
