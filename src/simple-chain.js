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
		let item = this.head;
		let item_position = 1;
		
		while(position !== item_position && item.next){
			item = item.next;
			item_position++;	
		}
		
		if(position === item_position){
			if(!item.next&&item.prev){this.tail = item.prev; item.prev.next = null;}
			else if(!item.prev){
				if(!item.next){this.head = null;this.tail = null;}
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
		if(!this.head){return this;}
		this.head = null;
		let item = this.tail;
		this.addLink(item.value);
		while(item.prev){
			
			item = item.prev;
			this.addLink(item.value);
		}
		
		return this;
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
