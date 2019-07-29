/**
 * 
 * @param {boolean} userType // 0 = normal, 1 = company
 * @param {boolean} productType // 0 = new product, 1 = old product
 * @param {number} price // price of the product
 * @param {date} publishedDate // date product was published
 */

function calculatePrice(userType, productType, price, publishedDate) {
	var rebate = 0; // set scoped variable for rebate
	var productTypePrice = 0; // set scoped variabled for product type price

	switch (userType) {
		case 0: // normal
			if (productType === 0) { // new product
				productTypePrice = 25;
				if (publishedDate.toDateString() === new Date().toDateString()) rebate = 10;

				return price + productTypePrice - rebate;
			} else if (productType === 1) { // old product
				productTypePrice = 35;
				return price + productTypePrice - rebate;
			}
			break;
		case 1: // company
			if (productType === 0) { // new product
				productTypePrice = 25;
				if (publishedDate.toDateString() === new Date().toDateString()) {
					rebate = 15;
					return price + productTypePrice - rebate; // Enddate discount and company discount
				}

				rebate = 5;
				return price + productTypePrice - rebate; // Only company discount
			} else if (productType === 1) { // old product
				productTypePrice = 35;
				rebate = 5;
				return price + productTypePrice - rebate;
			}
			break;
	}
	return 0;
}