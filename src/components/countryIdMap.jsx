export default function CountryIdsMap(props) {
   const { onChange, arrayForMap } = props;
   return (
     <select id="select-country" required onChange={onChange}>
       {arrayForMap?.map((country, index) => {
         return (
           <option key={index} value={country.id}>
             {country.name}
           </option>
         );
       })}
     </select>
   );
 }