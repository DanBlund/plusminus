import Link from 'next/link'
import ButtonSmall from './ButtonSmall'
import {IProductRow} from '../app/interfaces' // Använder interface i TYPESCRIPT för att kunna skicka in props

export const ProductRow: React.FC<IProductRow> = ({product, deleteProduct, openSell}) => { // Så här måste vi skriva för att ta emot props i TYPESCRIPT
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.title}
            </th>
            <td className="px-3 py-1">
                {product.priceBought}:-
            </td>
            <td className="px-3 py-1">
                {product.owners} st
            </td>
            <td className="px-3 py-1">
                {(product.priceBought) / (product.owners)}
            </td>
            <td className="px-3 py-1">
                {new Date(product.dateBought).toLocaleDateString()}
            </td>
            <td className="px-3 py-1">
                {product.priceSold}:-
            </td>
            <td className="px-3 py-1">
                {product.dateSold !== undefined && new Date(product.dateSold).toLocaleDateString() || "No"}      
            </td>
            <td className="px-3 py-1">
                <ButtonSmall text={"Delete"} func={deleteProduct} funcParameter={product.id}/>
                <ButtonSmall text={"Sell"} func={openSell} funcParameter={product.id}/>
            </td>
        </tr>
    )
}
