import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser, logOut } from "./userSlice";

const BASE_URL = process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST;
const TOKEN_TAG = "Token";

export const authApi = createApi({
  reducerPath: "authentication",
  tagTypes: [TOKEN_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (info) => {
        let data = null;
        if (info instanceof HTMLElement) {
          data = new FormData(info);
        } else {
          data = new FormData();
          data.append("username", info.username);
          data.append("password", info.password);
        }
        return {
          url: "/token",
          method: "post",
          body: data,
          credentials: "include",
        };
      },
      invalidatesTags: [TOKEN_TAG],
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then(() =>
          dispatch(authApi.endpoints.getToken.initiate())
        );
      },
      onError: (error) => {
        console.error(error);
      },
    }),
    getToken: builder.query({
      query: () => ({
        url: "/token",
        credentials: "include",
      }),
      providesTags: [TOKEN_TAG],
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then(({ data }) => {
          if (data && data.user) {
            dispatch(setUser(data));
          } else {
            dispatch(logOut());
          }
        });
      },
      onError: (error, { dispatch }) => {
        console.error(error);
        dispatch(logOut());
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/token",
        method: "delete",
        credentials: "include",
      }),
      invalidatesTags: [TOKEN_TAG],
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then(() => dispatch(logOut()));
      },
      onError: (error, { dispatch }) => {
        console.error(error);
        dispatch(logOut());
      },
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/api/users",
        method: "post",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: [TOKEN_TAG],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetTokenQuery,
  useLogoutMutation,
  useSignupMutation,
} = authApi;
