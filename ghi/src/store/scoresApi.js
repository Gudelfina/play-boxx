import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST;

export const trucksApi = createApi({
  reducerPath: "scores",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getScores: builder.query({
      query: () => "api/scores",
    }),
  }),
});

export const { useGetScoresQuery } = scoresApi;

// NEXT
// import scoresapi into store
// modify the leaderboard (see documentation for the oneliner or redux videos)
// then modify the quiz file
