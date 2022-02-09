import { createContext, useReducer, FC } from 'react';

enum Actions {
  UPDATE_PRODUCTS = 'UPDATE_PRODUCTS',
}

type Product = {
  id: number;
  brand: string;
  description: string;
  image: string;
  price: number;
};

interface ISearchContext {
  search?: string;
  products?: [Product?];
  onHandleSearch(search: string, products: [Product?]): Promise<any>;
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.UPDATE_PRODUCTS:
      return {
        ...state,
        search: action.payload.search,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

export const SearchContext = createContext<ISearchContext>({
  onHandleSearch: () => Promise.resolve(),
});

export const SearchContextConsumer = SearchContext.Consumer;

export const SearchContextProvider: FC = (props) => {
  const [state, dispatch] = useReducer(reducer, {});
  const onHandleSearch = (search: string, products: [Product]) =>
    new Promise((resolve) =>
      resolve(
        dispatch({
          type: Actions.UPDATE_PRODUCTS,
          payload: {
            search,
            products,
          },
        })
      )
    );
  return (
    <SearchContext.Provider value={{ ...state, onHandleSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
};
