import { ListItem } from "./ListItem"

export function ListOfLists({lists, deleteList}) {
    return (
        <ul className='w-full'>
            {lists.length === 0 && "No Lists"}  {/* Om lists är top?  && betyder sant då renderas "No Lists" */}
            {lists.map(list => {
            return <>
                <ListItem list={list} deleteList={deleteList} key={list.id}/>
            </>
            })}
        </ul> 
    )

}