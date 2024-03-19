import ScoreTable from "./scoreTable";
import SeasonMap from "./seasonMap";
import TournamentsMap from "./tournamentsMap";
import CountryIdsMap from "./countryIdMap";
import Loading from "./loading";
import { COUNTRY_Ids } from "../utilities/constants";
export default function TableInfo(props) {
  const {
    setCountryId,
    setError,
    setIsLoading,
    tournaments,
    seasonsInfo,
    getTournament,
    getSeasonId,
    isLoading,
    error,
    tableInfo,
    setTeamId
  } = props;
  function getCountryId() {
    let countryId = document.querySelector("#select-country")?.value;
    setCountryId(countryId);
    setError(false);
    setIsLoading(true);
  }
  return (
    <header className="App-header">
      <nav>
        <CountryIdsMap onChange={getCountryId} arrayForMap={COUNTRY_Ids} />
        <TournamentsMap
          getTournament={getTournament}
          tournaments={tournaments}
        />
        <SeasonMap onChange={getSeasonId} arrayForMap={seasonsInfo} />
      </nav>
      <div className="table-loading">
        {isLoading ? (
          <Loading/>
        ) : (
          <div>
            {error || !tableInfo ? (
              <Loading
                text={"No Data"}
                text2={"Please"}
                text3={"choose"}
                text4={"another"}
                text5={"option"}
              />
            ) : (
              <ScoreTable info={tableInfo} setTeamId={setTeamId}/>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
