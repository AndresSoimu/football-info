export default function SeasonMap(props) {
  const { onChange, arrayForMap } = props;
  return (
      <select size={1} id="select-season" onChange={onChange}>
        {arrayForMap?.map((number, index) => {
          return (
            <option id="option-select-season" key={index} value={number.id}>
              Season {number.year}
            </option>
          );
        })}
      </select>
  );
}
