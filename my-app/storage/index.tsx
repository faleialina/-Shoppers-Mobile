import Product from '@/assets/images/Product'
import Product2 from '@/assets/images/Product2'
import Product3 from '@/assets/images/Product3'
import { iProducts } from '@/interfaces'

const obj: iProducts[] = [
	{
		id: 1,
		title: 'Adidas Shoe',
		price: 10000,
		Qty: 1,
		img: <Product width={'100%'} height={112} />,
	},
	{
		id: 2,
		title: 'Smart Watch',
		price: 20000,
		Qty: 1,
		img: <Product2 width={'100%'} height={112} />,
	},
	{
		id: 3,
		title: 'Adidas Shoe',
		price: 30000,
		Qty: 1,
		img: <Product3 width={'100%'} height={112} />,
	},
	{
		id: 4,
		title: 'Adidas Shoe',
		price: 40000,
		Qty: 1,
		img: <Product3 width={'100%'} height={112} />,
	},
	{
		id: 5,
		title: 'Adidas Shoe',
		price: 50000,
		Qty: 1,
		img: <Product3 width={'100%'} height={112} />,
	},
	{
		id: 6,
		title: 'Adidas Shoe',
		price: 60000,
		Qty: 1,
		img: <Product3 width={'100%'} height={112} />,
	},
]

export default obj
