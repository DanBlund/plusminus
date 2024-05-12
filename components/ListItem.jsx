import Link from 'next/link'
import ButtonSmall from './ButtonSmall'

export function ListItem({list, deleteList}) {
    return (
        <li className='flex justify-between bg-white shadow-md rounded px-2 pt-2 pb-2 mb-4'>
                <Link  className="w-full self-center text-gray-700 text-sm font-bold" href={`/lists/${list.title}`}>
                    <label>{list.title}</label>
                </Link>
            <ButtonSmall text={"Delete"} func={deleteList} funcParameter={list.id}/>
        </li>
    )
}