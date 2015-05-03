# Workers in "background"
Namespace to manage workers in pseudo background in javascript, perfect to avoid UI blocking

# Example
````
// Add my first worker
Workers.add({
	each: 100,
	tick: function( iter ){
		console.log( iter );
		if( iter >= 10 )
			this.done();
	}
});

// This worker will stop all!!!
Workers.add({
	each: 500,
	tick: function( iter ){
		console.log("I will stop all these anoying workers!!!!!");
		Workers.stopAll();
		this.done();
	}
});
````
