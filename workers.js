/**
@author Juan Carlos Carrillo
**/
var Workers = Workers || {
	// Lista de workers
	list: new Array(),
	/**
		Añade un worker a la lista
		@param opt Objeto de tipo worker, con variable each para el intervalo y tick con una funcion que se llamará
	*/
	add: function( opt ){
		opt.done = function(){
			Workers.stop( this );
		};
		opt.w_iter = 0;
		opt.w_id_interval = setInterval( function(){
			opt.tick.call(opt,opt.w_iter);
			++opt.w_iter;
		}, opt.each );
		Workers.list.push(opt);
	},
	/**
		Detiene todos los workers
	**/
	stopAll: function(){
		for( var i = 0; i < Workers.list.length; ++i )
			Workers.stop( Workers.list[ i ] );
	},
	/**
		Detiene el worker
	**/
	stop: function( which ){
		clearInterval( which.w_id_interval );
		which.w_id_interval = -1;
	}
};
