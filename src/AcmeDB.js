class AcmeDB{
	constructor({users}){
		this.users = users;
		this.users[0].id = 1;
	}

	addUser(newName){
		// collect last id used
		var lastId = this.users[this.users.length-1].id;
		this.users.push(newName);
		this.users[this.users.length-1].id = lastId+1;
	}

	showUsers(){
		const userList = [];
		this.users.forEach(function(user){
			userList.push(user.name);
		});
		return userList.join();
	}

	findById(id){
		var userObj;
		this.users.forEach(function(user){
			if (user.id === id)  userObj = user;
		});
		return userObj;
	}

	removeUserById(id){
		var removeIndex = 0;
		this.users.forEach(function(user, index){
			if (id === user.id){
				removeIndex = index;
			}
		});
		this.users.splice(removeIndex,1);
	}

	editUser(obj){
		var changeIndex = 0;
		this.users.forEach(function(user, index){
			if (obj.id === user.id){
				changeIndex = index;
			}
		});
		this.users[changeIndex] = obj;		
	}
}

export default AcmeDB;