import { createStoreon } from "storeon";
import { storeonDevtools } from "storeon/devtools";

const baseURL = "http://www.omdbapi.com/?apikey=ff5205d9&";

const Request = (url: string) => {
  return fetch(url, {
    method: "GET",
  });
};

const films = {
  search: "",
};

let app = (store: any) => {

  store.on("@init", () => ({ films }));

  store.on("film/changed", ({ films }: any, payload: object) => ({
    films: {
      ...films,
      ...payload,
    },
  }));

  store.on("film/search", ({ films }: any) => {
    Request(baseURL + `t=${films.search}&plot=short`)
      .then((r) => r.json())
      .then((data) => {
        if (data.Response === "False") {
          store.dispatch("film/changed", { Error: data.Error });
        } else {
          store.dispatch("film/changed", { ...data, Error: false });
        }
      });
  });

  store.on("get/film", () => {
    Request(baseURL + "t=Inception")
      .then((r) => r.json())
      .then((data) => {
        store.dispatch("film/changed", data);
      });
  });
};

export const store = createStoreon([
  app,
  process.env.NODE_ENV !== "production" && storeonDevtools,
]);
