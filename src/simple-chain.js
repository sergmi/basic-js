const chainMaker = {
  getLength() {
     return this.length;
  },
  addLink(value) {
    let node = {value: value, next: null, prev: null}
	let item;
    	if(!this.head){
		this.head = node;
		this.tail = node;
		this.length = 1;
	}
	else{
		item = this.head;
		while(item.next){
			item = item.next;
		}
		node.prev = item;
		item.next = node;
		this.tail = item.next;
		this.length++;
	}
	return this;
  },
  removeLink(position) {
		item = this.head;
		while(position !== item.value && item.next){
			item = item.next;
				
		}
		
		if(position === item.value){
			if(!item.next&&item.prev){item.prev.next = null;}
			else if(!item.prev){
				if(!item.next){this.head = null;}
				else{this.head = item.next;}
			}
			else{
				item.next.prev = item.prev;
				item.prev.next = item.next;
			}
			this.length--;
		}
		else{throw "value absent";}
		
		return this;
  },
  reverseChain() {
    throw 'Not implemented';
    // remove line with error and write your code here
  },
  finishChain() {
    let res = "";
	if(!this.head){return false;}
	else{
		item = this.head;
		res += "( " + item.value + " )";
		while(item.next){
			item = item.next;
			res += "~~( " + item.value + " )";
		}
	}
	return res;
  }
};

module.exports = chainMaker;
