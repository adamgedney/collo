export const Collo  = function (collection) {
	this._collection = collection || [];

	/**
	 * Return the current collection
	 */
	this.list = () => this._collection;

	/**
	 * Return the item where the key/al match
	 * @param val
	 */
	this.findWhere = val => this._collection
	  .filter(item => {
		  let key = Object.keys(val)[0];

		  return item[key] && item[key] === val[key];
	  })[0];

	/**
	 * Insert the item at the end of the stack
	 * @param item
	 * @returns {*|Array}
	 */
	this.insert = item => {
	  this._collection.push(item);

	  return this._collection;
	};

	/**
	 * Splice an item in at an exact position in the collection
	 * @param item
	 * @param index
	 * @returns {*|Array}
	 */
	this.insertAtIndex = (item, index) => {
		this._collection.splice(index,0,item);
		return this._collection;
	};

	/**
	 * If the item exists, perform an dupdate, otherwise insert
	 * @param val
	 * @param item
	 * @returns {*}
	 */
	this.upsert = (val,item) => {
	  let wasInCollection = false;

	  const upsrt = this._collection.map(it => {
		  let key = Object.keys(val)[0];

		  if(it[key] === val[key]){
			  wasInCollection = true;

			 return  Object.assign({},it,item);
		  }else{
			  return it;
		  }
	  });


	  if(!wasInCollection){
		  this.insert(item);

		  return this._collection;
	  }else{
		  return upsrt;
	  }
	};

	/**
	 * Remove where the key and value match
	 * @param val
	 */
  	this.removeWhere = val => this._collection
	  .filter(item => {
		  let key = Object.keys(val)[0];

		  return item[key] && !(item[key] === val[key]);
	  });

	/**
	 * Perform a normal update if the key and value match
	 * @param val
	 * @param item
	 */
	this.updateWhere = (val,item) => this._collection.map(it => {
	  let key = Object.keys(val)[0];

	  if(it[key] === val[key]){
		  return  Object.assign({},it,item);
	  }else{
		  return it;
	  }
	});

	return this;
};