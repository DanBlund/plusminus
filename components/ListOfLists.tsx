import {IListOfLists} from '../app/interfaces' // Använder interface i TYPESCRIPT för att kunna skicka in props
import { ListRow } from './ListRow'

  export const ListOfLists: React.FC<IListOfLists> = ({lists, deleteList}) => { // Så här måste vi skriva för att ta emot props i TYPESCRIPT

    {console.log(lists.length)}
    
    return (
        <ul className='w-full'>
            {(Number(lists.length) === 0) && "No Lists"}  {/* Om lists är tom?  && betyder sant då renderas "No Lists" */}
            
            {lists.map(list => {
            return <>
                <ListRow list={list} deleteList={deleteList} key={list.id}/>
            </>
            })}
        </ul> 
    )

}