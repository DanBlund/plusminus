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

  export interface IListRow {
    list: {
        title: string;
        id: string;
        };
    deleteList(id: string): any;
  }

  export interface IProductRow {
    product: IProduct,
    deleteProduct(id: string): any;
  }

  export interface IProduct {
      id: string, 
      title: string,  
      priceBought: number, 
      priceSold: number, 
      owners: number, 
      dateBought: number,
      dateSold: number,
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

  export interface IAddItemForm {
    func(
      title: string,
      priceBought: number,
      priceSold: number,
      owners: number,
    ): any;
  }