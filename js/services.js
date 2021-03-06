angular.module('shoppingCart.services', [])

.service('Items', function() {
	var checkoutArray = [];

	var items = [{
		"_id": "55c8ee82152165d244b98300",
		"name": "Bayard stew",
		"ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
		"caffeineScale": 244,
		"price": 1540,
		"inStock": true,
		"amountInStock": 20,
		"rating": 1,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
		"__v": 0,
		"categories": ["dark", "cold"]
	}, {
		"_id": "55c8ee82152165d244b98301",
		"name": "Incompactness syrup",
		"ingredients": "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
		"caffeineScale": 49,
		"price": 7348,
		"inStock": true,
		"amountInStock": 10,
		"rating": 2,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
		"__v": 0,
		"categories": ["awesome"]
	}, {
		"_id": "55c8ee82152165d244b98302",
		"name": "Flexner white tea",
		"ingredients": "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
		"caffeineScale": 38,
		"price": 4991,
		"inStock": true,
		"amountInStock": 10,
		"rating": 4,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
		"__v": 0,
		"categories": ["cold"]
	}, {
		"_id": "55c8ee82152165d244b98303",
		"name": "Pressor leaf",
		"ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
		"caffeineScale": 153,
		"price": 5496,
		"inStock": true,
		"amountInStock": 10,
		"rating": 1,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
		"__v": 0,
		"categories": ["dry", "hot", "awesome"]
	}, {
		"_id": "55c8ee82152165d244b98304",
		"name": "Flexner veggie tea",
		"ingredients": "cream of tartar, eggplant, cake, deer antler",
		"caffeineScale": 181,
		"price": 2445,
		"inStock": true,
		"amountInStock": 10,
		"rating": 1,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
		"__v": 0,
		"categories": ["summer"]
	}, {
		"_id": "55c8ee82152165d244b98305",
		"name": "Topflighter malt",
		"ingredients": "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
		"caffeineScale": 241,
		"price": 4486,
		"inStock": true,
		"amountInStock": 15,
		"rating": 3,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
		"__v": 0,
		"categories": ["dry", "lucid", "warm"]
	}, {
		"_id": "55c8ee82152165d244b98306",
		"name": "Cooking mix",
		"ingredients": "flavorings, roasted mushrooms, toast, tumeric",
		"caffeineScale": 230,
		"price": 6973,
		"inStock": true,
		"amountInStock": 10,
		"rating": 3,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
		"__v": 0,
		"categories": ["summer"]
	}, {
		"_id": "55c8ee82152165d244b98307",
		"name": "Cooking stew",
		"ingredients": "eggplant",
		"caffeineScale": 122,
		"price": 6003,
		"inStock": true,
		"amountInStock": 10,
		"rating": 2,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
		"__v": 0,
		"categories": ["dry", "winter", "lucid"]
	}, {
		"_id": "55c8ee82152165d244b98308",
		"name": "Prevenient herb tea",
		"ingredients": "cream of tartar, cream of cream, kitchen scraps, flavorings",
		"caffeineScale": 196,
		"price": 1374,
		"inStock": true,
		"amountInStock": 10,
		"rating": 3,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
		"__v": 0,
		"categories": ["lucid", "hot"]
	}, {
		"_id": "55c8ee82152165d244b98309",
		"name": "Angular mix",
		"ingredients": "hot sauce, lawn clippings, fennel, parsley, quinine",
		"caffeineScale": 196,
		"price": 4158,
		"inStock": true,
		"amountInStock": 12,
		"rating": 2,
		"imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
		"__v": 0,
		"categories": ["spring", "warm", "winter"]
	}]
	return {
		all: function() {
			return items;
		},
		countOption: function() {
			var objectReturn = {};
			for (var i = 1; i < 11; i++) {
				objectReturn[i] = i
			}
			return objectReturn;
		},
		createSubtotal: function(arrayOfObjects){
			var subtotal = 0;
			arrayOfObjects.forEach(function(ele){
				subtotal += ((ele.price)*(ele.quantity))
			})
			return subtotal;
		},
		createCheckoutObject: function(tea) {
			if(tea == undefined){
				return checkoutArray;
			}
			if(checkoutArray.indexOf(tea) > -1){
			}else{
				checkoutArray.push(tea);
			}
			return checkoutArray;
		},
		removeItemFromCheckout: function(item) {
			var index = checkoutArray.indexOf(item);
			if (index > -1) {
			    checkoutArray.splice(index, 1);
			}
			return checkoutArray;
		},
		// updateCheckoutArray: function()
		get: function(itemId) {
			for (var i = 0; i < items.length; i++) {
				if (items[i]._id === itemId) {
					return items[i];
				}
			}
			return null;
		},
		getCategories: function() { //TODO: Use object keys. cant have dups.
			var categoryArray = [];
			for (var i = 0; i < items.length; i++) {
				for (var item in items[i].categories) {
					if (categoryArray.indexOf(items[i].categories[item]) > -1) {
						continue;
					} else {
						categoryArray.push(items[i].categories[item]);
					}
				}
			}
			return categoryArray;
		}
	}
})
