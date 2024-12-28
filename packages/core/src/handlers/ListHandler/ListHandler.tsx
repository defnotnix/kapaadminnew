"use client";

import { createContext, useReducer } from "react";
//mantine
import { } from "@mantine/core";
//context
//contex
import { Context, useContext } from "./ListHandler.context";
//query
import { useQuery } from "@tanstack/react-query";
//helpers


import { autoSearch } from "@vsphere/core";
//type
import { PropListHandler } from "./ListHandler.type";
import { useDebouncedState } from "@mantine/hooks";

//types
type PropActionTypes = {
  type: string;
  payload: any;
};

type PropState = {
  page: number;
  pageSize: number;
  search: string;
  selectedRecords: any[];
  tabActive: number;
  filters: any[];
};

// Initial State
const initialState = {
  page: 1,
  pageSize: 20,
  //search
  search: "",
  selectedRecords: [],
  //filter
  filters: [],
  //tabs
  tabActive: 0,
};

// Reducer
function reducer(state: PropState, action: PropActionTypes) {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_PAGE_SIZE":
      return {
        ...state,
        pageSize: action.payload,
      };
    case "SET_PAGE_DATA":
      return {
        ...state,
        pageSize: action.payload.pageSize,
        page: action.payload.page,
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "SET_SELECTED_RECORDS":
      return {
        ...state,
        selectedRecords: action.payload,
      };

    case "SET_TAB_ACTIVE":
      return {
        ...state,
        tabActive: action.payload,
      };
    case "ADD_FILTER":
      return {
        ...state,
        filters: [...state.filters, action.payload],
      };
    case "REMOVE_FILTER":
      return {
        ...state,
        filters: state.filters.filter(
          (item: any) => item.accessor !== action.payload
        ),
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: [],
      };
    default:
      return state;
  }
}

export function ListHandler({
  //api
  api,
  apiParams,
  addToURL = "",
  endpoint = "",
  dataKey,
  queryKey = ["temp"],
  //search
  enableServerSearch = false,
  enableServerPagination = false,
  //(children
  children,
}: PropListHandler) {
  // * DEFINITIONS

  const [searchVal, setSearchVal] = useDebouncedState("", 200);

  // * CONTEXTS

  const [state, dispatch] = useReducer(reducer, initialState);
  const { page, pageSize, search, selectedRecords, filters } = state;

  // * STATES

  // * PRERUNS

  const { data, isLoading, isLoadingError, refetch, isFetching } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {


      const response = await api({
        endpoint: endpoint + addToURL || "",
        searchValue: search,
        page,
        pageSize,
        params: apiParams
      })
        .then((res: any) => {
          console.log(endpoint + addToURL || "")
          return res;
        })
        .catch((err: any) => {

          return [];
        });

      return dataKey ? response[dataKey] : response;
    },
    initialData: [],
  });

  // * FUNCTIONS

  const handleServerSearch = ({
    filters,
    searchVal,
  }: {
    filters: any;
    searchVal: string;
  }) => {
    console.log(filters, searchVal);
  };

  const handleServerPagination = () => { };

  const getSelectiveData = (records: any) => {
    if (enableServerSearch) {
      if (enableServerPagination) {
        return records;
      } else {
        return records.slice(page - 1 * pageSize, page * pageSize);
      }
    } else {
      return autoSearch(records, searchVal).slice(
        (page - 1) * pageSize,
        page * pageSize
      );
    }
  };

  // * COMPONENTS

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        //table
        data: getSelectiveData(data),
        isLoading,
        isFetching,
        refetch,
        isLoadingError,
        //search
        searchVal,
        setSearchVal,
      }}
    >
      {children}
    </Context.Provider>
  );
}
