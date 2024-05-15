export interface IButtonSmall {
    text: string;
    func(id: string): any;
    funcParameter: string;
  }

  export interface IButtonBig {
    text: string;
    func?(id: string): any;
    funcParameter?: string;
  }

  export interface IListItem {
    list: {
        title: string;
        id: string;
        };
    deleteList(id: string): any;
  }

  export interface IListOfLists {
    lists: [
        {
            id: string;
            title: string;
            valueBought: number;
            valueSold: number;
            itemsBought: number;
            itemsSold: number;
        },
    ];
    deleteList(id: string): any;
  }

  export interface INewListForm {
    func(title: string): any;
  }