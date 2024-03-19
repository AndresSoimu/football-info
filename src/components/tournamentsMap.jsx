export default function TournamentsMap(props) {
  const { tournaments, getTournament } = props;

  
  return (
    <select id="select-tournament" onChange={getTournament}>
      {tournaments?.map((tournament, index) => {
        return (
          <option key={index} value={tournament.id}>
            {tournament.name}
          </option>
        );
      })}
    </select>
  );
}
