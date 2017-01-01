function route(handle, pathname){
	console.log("router : " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname]();
	}else{
		console.log("handle " + handle[pathname] + " is not function");
	}
}


exports.route = route;