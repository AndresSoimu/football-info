const apiKey = process.env.REACT_APP_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "footapi7.p.rapidapi.com",
  },
};
const API_URL = "https://footapi7.p.rapidapi.com/api";
const COUNTRY_Ids = [
  { name: "Spain", id: 32 },
  { name: "England", id: 1 },
  { name: "France", id: 7 },
  { name: "Germany", id: 30 },
  { name: "Italy", id: 31 },
  { name: "Portugal", id: 44 },
  { name: "Poland", id: 47 },
  { name: "Moldova", id: 279 },
];

export { API_OPTIONS, API_URL, COUNTRY_Ids };
