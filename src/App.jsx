import { useEffect, useState } from "react";
import TableInfo from "./components/TableInfo";
import LastMatchInfo from "./components/lastMathesInfo";
import { API_URL } from "./utilities/constants";
import {
  getTeamLastMatch,
  getTableInfo,
  getSeasonsInfo,
  getTournamentsInfo,
} from "./utilities/fetching";
import "./App.css";

function App() {
  const [ligueId, setLigueId] = useState("8");
  const [seasonId, setSeasonId] = useState("52376");
  const [countryId, setCountryId] = useState("32");
  const [teamId, setTeamId] = useState(null);
  const [teamLastMatch, setTeamLastMatch] = useState([]);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [seasonsInfo, setSeasonsInfo] = useState([]);
  const [tableInfo, setTableInfo] = useState([]);
  const [tournaments, setTournamentsInfo] = useState([]);

  const tableInfoUrl = `${API_URL}/tournament/${ligueId}/season/${seasonId}/standings/total`;
  const seasonIdUrl = `${API_URL}/tournament/${ligueId}/seasons`;
  const tournamentsInfoUrl = `${API_URL}/tournament/all/category/${countryId}`;
  // to Do const logoTeamUrl = `https://footapi7.p.rapidapi.com/api/team/2672/image`;
  // to Do const matchStatisticUrl =`https://footapi7.p.rapidapi.com/api/match/11368711/statistics`
  const lastMatchesUrl = teamId && `${API_URL}/team/${teamId}/matches/previous/0`
  

  function getSeasonId() {
    const seasonIdValue = document.getElementById("select-season")?.value;
    setSeasonId(seasonIdValue);
    setError(false);
  }

  function getTournament() {
    let tournamentId = document.querySelector("#select-tournament")?.value;
    setLigueId(tournamentId);
    setError(false);
    setIsLoading(true);
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, [seasonId]);

  useEffect(() => {
    setTimeout(() => {
      getSeasonId();
    }, 2000);
  }, [ligueId]);

  useEffect(() => {
    setTimeout(() => getTournament(), 1800);
  }, [countryId]);

  useEffect(() => {
    getTableInfo(tableInfoUrl, setTableInfo, setError);
  }, [seasonId]); // eslint-disable-line

  useEffect(() => {
    getTeamLastMatch(lastMatchesUrl, setTeamLastMatch);
  }, [teamId]); // eslint-disable-line

  useEffect(() => {
    getSeasonsInfo(seasonIdUrl, setSeasonsInfo);
  }, [seasonIdUrl]);

  useEffect(() => {
    getTournamentsInfo(tournamentsInfoUrl, setTournamentsInfo);
  }, [countryId]);// eslint-disable-line

  return (
    <div className="App">
      <TableInfo
        setCountryId={setCountryId}
        setError={setError}
        setIsLoading={setIsLoading}
        tournaments={tournaments}
        seasonsInfo={seasonsInfo}
        getTournament={getTournament}
        getSeasonId={getSeasonId}
        isLoading={isLoading}
        error={error}
        tableInfo={tableInfo}
        setTeamId={setTeamId}
      />
    <LastMatchInfo teamLastMatch={teamLastMatch}/>
    </div>
  );
}

export default App;
