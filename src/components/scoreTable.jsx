export default function ScoreTable({ info, setTeamId }) {
  function getTeamId(id) {
    setTeamId(id);
  }
  return (
    <table>
      <thead>
        <tr className="table-header">
          <th>#</th>
          <th>#</th>
          <th>EQUIPO</th>
          <th>PJ</th>
          <th className="display-none">PW</th>
          <th className="display-none">PL</th>
          <th className="display-none">PD</th>
          <th>G</th>
          <th className="display-none">GD</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {info &&
          info.map((element, index) => {
            const {
              position,
              team,
              matches,
              wins,
              scoresFor,
              scoresAgainst,
              losses,
              draws,
              points,
              promotion,
            } = element;

            const backgraundColor = () => {
              if (
                promotion?.text === "Champions League" ||
                promotion?.text === "Promotion"
              ) {
                return "color-blue";
              } else if (
                promotion?.text === "UEFA Europa League" ||
                promotion?.text === "Promotion Playoffs"
              ) {
                return "color-brown";
              } else if (
                promotion?.text === "UEFA Conference League Qualification"
              ) {
                return "color-yellow";
              } else if (promotion?.text === "Relegation") {
                return "color-red";
              }
            };
            return (
              <tr key={index} className="table-content">
                <td key={position} className={backgraundColor()}>
                  {position}.
                </td>
                <td>
                  <div
                    className="team-color"
                    style={{
                      background: `linear-gradient(35deg, ${team.teamColors.primary}, ${team.teamColors.secondary}) `,
                      width: "20px",
                      height: "20px",
                      borderRadius: "100%",
                      color: `black`,
                    }}
                  >
                   {team.nameCode}
                  </div>
                </td>
                <td>
                  <button onClick={() => getTeamId(team.id)}>
                    {team.shortName}
                  </button>
                </td>
                <td  key={position + 1}>{matches}</td>
                <td className="display-none" key={position + 2}>{wins}</td>
                <td className="display-none" key={position + 3}>{losses}</td>
                <td className="display-none" key={position + 4}>{draws}</td>
                <td key={position + 5}>
                  {scoresFor}:{scoresAgainst}{" "}
                </td>
                <td className="display-none" key={position + 6}>{scoresFor - scoresAgainst}</td>
                <td key={position + 7}>{points}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
