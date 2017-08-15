
export const Collection = function (collection){

  this.list = ()=>collection;

  this.findWhere = (key,value)=>collection
      .filter(item=>item[key] && item[key] === value)[0];

  this.insert = ()=>{};
  this.upsert = ()=>{};
  this.remove = ()=>{};
  this.update = ()=>{};

  return this;
};
