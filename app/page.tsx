import { redirect } from 'next/navigation';

export const ACTIONS = {
    ADD_TO_LIST: 'add-list',
    DELETE_FROM_LIST: 'delete-list',
    SELL_ITEM: 'sell-item',
    SELL_MODAL: 'sell-modal',
    SORT_LIST: 'sort-list'
  }

export default async function Home() {
    redirect('/lists');
}
