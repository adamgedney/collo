function collo(collection, options={}, next=()=>{}, error=()=>{}) {
	this._collection = collection || [];
	this.next = next;
	this.error = error;
	
	const self = this;
	const InvalidInputType = "Invalid input type. Input must be an object";
	const NotFound = "Item not found in the collection";

	/**
	 * Check if is an object with values
	 * @param item
	 * @private
	 */
	self._isObject = (item)=>item && typeof item === 'object' && Object.keys(item).length;

	/**
	 * Internal index fetcher
	 * @param val
	 * @returns {boolean}
	 * @private
	 */
	self._getTheIndexOf = (val)=>{
		let index = false;
		let key = Object.keys(val)[0];

		self._collection.forEach((item,i)=>{
			if(item[key] === val[key]){ index = i; }
		});

		return index;
	};


	/**
	 * Rsponse utility fns
	 * @param input
	 * @param options
	 * @param next
	 * @returns {*}
	 */
	self._onSuccess = (input,options)=>{
		this.next(input);

		if(options.promisify){
			return new Promise(function (resolve, reject) {
				resolve(input);
			});
		}

		return input;
	};

	self._onFail = (input,options)=>{
		//const response = input.hasOwnProperty('Error') ? null : input;
		const response = null;

		this.error(response);

		console.log('ERROR',response,input,options,this);

		if(options.promisify){
			return new Promise(function (resolve, reject) {
				reject(response);
			});
		}

		return response;
	};

	/**
	 * Public get the index of method
	 * @param val
	 * @returns {*}
	 */
	self.getTheIndexOf = val=>{
		if(self._isObject(val)) {
			let index = self._getTheIndexOf(val);

			if(index) {
				return self._onSuccess(index,options)
			}else{
				return self._onFail({Error:NotFound},options)
			}
		}else{
			return self._onFail({Error:InvalidInputType},options);
		}
	};

	/**
	 * Return the current collection
	 */
	self.list = ()=>self._onSuccess(self._collection,options);

	/**
	 * Return the item where the key/al match
	 * @param val
	 */
	self.findWhere = val => {
		if(self._isObject(val)) {
			const i = self._collection
				.filter(item => {
					let key = Object.keys(val)[0];

					return item[key] && item[key] === val[key];
				})[0];

			if (i) {
				return self._onSuccess(i,options);
			} else {
				return self._onSuccess(null,options)
			}
		}else{
			return self._onFail({Error:InvalidInputType},options);
		}
	};

	/**
	 * Used to determine if an item is in the collection
	 * @param val
	 */
	self.exists = val =>self._isObject(val)
		? self._onSuccess(!!self._getTheIndexOf(val),options)
		: self._onFail({Error:InvalidInputType},options);

	/**
	 * Insert the item at the end of the stack
	 * @param item
	 * @returns {*|Array}
	 */
	self.insert = item => {
		if(self._isObject(item)){
			self._collection.push(item);

			return self._onSuccess(self._collection,options);
		}

		return self._onFail({Error:InvalidInputType},options);
	};

	/**
	 * Splice an item in at an exact position in the collection
	 * @param item
	 * @param index
	 * @returns {*|Array}
	 */
	self.insertAtIndex = (item, index) => {
		if(self._isObject(item)) {
			self._collection.splice(index, 0, item);

			return self._onSuccess(self._collection,options);
		}

		return self._onFail({Error:InvalidInputType},options);
	};

	/**
	 * If the item exists, perform an dupdate, otherwise insert
	 * @param val
	 * @param item
	 * @returns {*}
	 */
	self.upsert = (val,item) => {
		if(self._isObject(val) && self._isObject(item)) {
			if (!self._getTheIndexOf(val)) {
				self.insert(item);
			} else {
				self._collection = self._collection.map(it => {
					let key = Object.keys(val)[0];

					if (it[key] === val[key]) {
						return Object.assign({}, it, item);
					}

					return it;
				});
			}

			return self._onSuccess(self._collection,options);
		}

		return self._onFail({Error:InvalidInputType},options);
	};

	/**
	 * Remove where the key and value match
	 * @param val
	 */
  	self.removeWhere = val => {
		if(self._isObject(val)) {
			const index = self._getTheIndexOf(val);

			if(index) {
				self._collection.splice(index, 1);

				return self._onSuccess(self._collection,options);
			}else{
				return self._onFail({Error:NotFound},options);			}
		}

		return self._onFail({Error:InvalidInputType},options);
	};

	/**
	 * Perform a normal update if the key and value match
	 * @param val
	 * @param item
	 */
	self.updateWhere = (val,item) => {
		if(self._isObject(val) && self._isObject(val)){
			self._collection = self._collection.map(it => {

				let key = Object.keys(val)[0];

				if(it[key] === val[key]){
					return  Object.assign({},it,item);
				}else{
					return it;
				}
			});

			return self._onSuccess(self._collection,options);
		}

		return self._onFail({Error:InvalidInputType},options);
	};

	return this;
};


export default collo;
