import { API_OPTIONS } from "./constants";

async function getTableInfo(tableInfoUrl, setTableInfo, setError) {
  try {
    const response = await fetch(tableInfoUrl, API_OPTIONS);
    if (response.status === 204) setError(true);
    if (!response.ok) console.error(response.status);
    const result = await response.json();
    const info = result?.standings[0].rows;
    setTableInfo(info);
  } catch (error) {
    console.error("myEror-", error);
  }
}

async function getTeamLastMatch(apiUrl, setTeamLastMatch) {
  try {
    const response = await fetch(apiUrl, API_OPTIONS);
    if (!response.ok) console.error(response.status);
    const result = await response.json();
    setTeamLastMatch(result.events.reverse());
  } catch (error) {
    console.error("myEror-", error);
  }
}
async function getSeasonsInfo(apiUrl, setSeasonsInfo) {
  try {
    const response = await fetch(apiUrl, API_OPTIONS);
    if (!response.ok) console.error(response.status);
    const result = await response.json();
    setSeasonsInfo(result.seasons);
  } catch (error) {
    console.error("myEror-", error);
  }
}
async function getTournamentsInfo(apiUrl, setTournamentsInfo) {
  try {
    const response = await fetch(apiUrl, API_OPTIONS);
    const result = await response.json();
    const tournaments = result.groups[0].uniqueTournaments;
    setTournamentsInfo(tournaments);
  } catch (error) {
    console.error("myEror -", error);
  }
}

export { getTableInfo, getSeasonsInfo, getTournamentsInfo, getTeamLastMatch };
