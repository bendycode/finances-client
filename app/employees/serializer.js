import DS from 'ember-data';

export default DS.Serializer.extend({
  normalizeResponse: function(store, modelClass, payload) {
    return {data: payload.map(this.parseEmployeeRecord)};
  },

  parseEmployeeRecord: function(record) {
    return {
      id: record.id,
      type: "employees",
      attributes: {
        name: record.name
      }
    }
  },
});
