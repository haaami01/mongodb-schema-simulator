// Definition of the fields to execute
module.exports = [{
  // Name of the schema
  name: 'cart_reservation_successful',
  
  // Set the collection name for the carts
  collections: {
      carts: 'carts'
    , products: 'products'
    , inventories: 'inventories'
    , order: 'orders'
  },

  // Parameters
  params: {
      numberOfItems: 5
    , numberOfProducts: 1000
    , sizeOfProductsInBytes: 1024
  },

  // Run against specific db
  db: 'shop',

  // writeConcern
  writeConcern: {
    carts: { w: 1, wtimeout: 10000 }
  },

  // Setup function (run before the scenario is executed)
  // used to allow doing stuff like setting up the sharded collection
  // etc.
  setup: function(db, callback) {
    db.dropDatabase(callback);
  },

  //
  // Execution plan is run using all the process.openStdin();
  execution: {
    // Number of ticks/iterations we are running
      iterations: 25
    // Number of users starting the op at every tick
    , numberOfUsers: 250
  }
}];