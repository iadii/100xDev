import { useEffect, useState } from "react";

export default function FetchData({index}) {
  const [spell, setSpell] = useState([]);

  useEffect(() => {
    fetch(`https://potterapi-fedeperin.vercel.app/en/spells?index=${index}`)
    .then( async (res) => {
        const json = await res.json();
        setSpell(json);
      });
  }, [index]);

  return (
    <div>
      {Array.isArray(spell) ? spell.map((sp) => (
        <div>
          <h1 style={{display:"inline-block"}}>{spell.spell}</h1> - use for {spell.use}
        </div>
      )) : <div> <h1 style={{display:"inline-block"}}>{spell.spell}</h1> - use for {spell.use}</div>}
    </div>
  );
}
