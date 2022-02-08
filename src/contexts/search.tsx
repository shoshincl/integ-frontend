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
  products?: [Product?];
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.UPDATE_PRODUCTS:
      return { ...state, products: action.payload.products };
    default:
      return state;
  }
};

export const SearchContext = createContext<ISearchContext>({});

export const SearchContextConsumer = SearchContext.Consumer;

export const SearchContextProvider: FC = (props) => {
  const [state, dispatch] = useReducer(reducer, {});
  const onHandleSearch = (products: [Product]) =>
    new Promise((resolve) =>
      resolve(
        dispatch({
          type: Actions.UPDATE_PRODUCTS,
          payload: {
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
