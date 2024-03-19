export default function LastMatchInfo({ teamLastMatch }) {
  return (
    <div className="match-list-container">
      {teamLastMatch && (
        <div  className="unorder-list">
          {teamLastMatch.map((info, index) => {
            function statusColorFirstTeam() {
              if (info.winnerCode === 2) {
                return "rgba(255, 255, 255, 0.553)";
              } else if (info.winnerCode === 1) {
                return "white";
              } else if (info.winnerCode === 3) {
                return "rgba(255, 255, 255, 0.718)";
              }
            }
            function statusColorSecondTeam() {
              if (info.winnerCode === 2) {
                return "white";
              } else if (info.winnerCode === 1) {
                return "rgba(255, 255, 255, 0.553)";
              } else if (info.winnerCode === 3) {
                return "rgba(255, 255, 255, 0.718)";
              }
            }
            return (
              <div className="li-tag" key={index}>
                <div id="last-matches-date">
                  <span>
                    {new Date(info.startTimestamp * 1000).toLocaleDateString(
                      "en-GB"
                    )}
                  </span>
                  <span>
                    {new Date(info.startTimestamp * 1000).toLocaleTimeString(
                      [],
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </span>
                </div>
                <div id="last-matches-info">
                  <div id="last-matches-teams-name">
                    <p style={{ color: statusColorFirstTeam() }}>
                      {info.homeTeam.shortName}
                    </p>

                    <p style={{ color: statusColorSecondTeam() }}>
                      {info.awayTeam.shortName}
                    </p>
                  </div>
                  <div id="last-matches-teams-score">
                    <p>{info.homeScore.current}</p>
                    <p>{info.awayScore.current}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
