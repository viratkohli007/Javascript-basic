var a = 1, b = 2, c = 3;

(function firstFunction(){
	var b = 5, c = 6;
           console.log('c: ' + c);
	(function secondFunction(){
		var b = 8;
                 console.log('b: ' + b);
		(function thirdFunction(){
			var a = 7, c = 9;

			(function fourthFunction(){
				var a = 1, c = 8;

			})();
		})();
	})();
})();

console.log('a: ' + a);
