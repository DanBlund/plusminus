import { redirect } from 'next/navigation';

export const ACTIONS = {
    ADD_LIST: 'add-list',
    DELETE_LIST: 'delete-list'
  }

export default async function Home() {
    redirect('/lists');
}
