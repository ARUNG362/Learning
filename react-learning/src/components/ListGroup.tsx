// import { Fragment } from "react/jsx-runtime";
// import { Fragment } from "react/jsx-runtime";
// import type { MouseEvent } from "react";

interface Props {
    items : string[],
    title : string,
    onSelectItem : (item : string) => void
}

import { useState } from "react";

function ListGroup({items, title, onSelectItem} : Props) {
  //   return (
  //     <Fragment>
  //       <h1>List</h1>
  //       <ul className="list-group">
  //         <li className="list-group-item">Cras justo odio</li>
  //         <li className="list-group-item">Dapibus ac facilisis in</li>
  //         <li className="list-group-item">Morbi leo risus</li>
  //         <li className="list-group-item">Porta ac consectetur ac</li>
  //         <li className="list-group-item">Vestibulum at eros</li>
  //       </ul>
  //     </Fragment>
  //   );

    const cities = items;

    // const handleEvent = (event : MouseEvent) => {
    //     console.log(event.clientX)
    // }

    const [selectIndext, setSelectIndex] = useState(-1);
  return (
    <>
      <h1>{title}</h1>
      {/* { (cities.length == 0 ? <p>No Cities</p> : null) } */}
      { cities.length === 0 &&  <p>No Cities</p> }
      <ul className="list-group">
        { cities.map((city, i) => {
            // return <li className="list-group-item" key={city} onClick={handleEvent} >{city}</li>
            return <li className={selectIndext == i ? "list-group-item active" : "list-group-item" } key={city} onClick={() => {
                setSelectIndex(i);
                onSelectItem(city)
            }} >{city}</li>

        }) }
      </ul>
    </>
  );
}

export default ListGroup;
