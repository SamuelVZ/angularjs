(function(){
	var app = angular.module('store', []); //el orden de los productos si altera el resultado en dependencias
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	}
	var gems = [
	{name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	},
	{name: 'Zirconium',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	},
	{name: 'bibidi',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	},
	{   name: 'babidi',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	},
	{   name: 'bu',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	},
	{   name: 'productito',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	},
	{   name: 'just do it',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	},
	{   name: 'don´t let your dreams be dreams',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	},
	{   name: 'final',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere dolorum aut amet quos inventore, quas ex, quae fuga et reprehenderit quia iure eum tempore eius perferendis deserunt maxime quo. Dolore?',
		canPurchase: false,
		soldOut: false
	}
	];

	app.controller('StoreController', function(){
		this.products = gems;

	})
})();

