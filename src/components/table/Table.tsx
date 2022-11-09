import React from "react";
import data from "./../../assets/mock_data.json";

import icon_announce from "./../../assets/icons/megaphone.svg";
import icon_alert from "./../../assets/icons/alert-circle.svg";
import icon_remove from "./../../assets/icons/remove.svg";
import moment from "moment";
import cn from "classnames";

function Table() {
  const [useData, setUseData] = React.useState(data);

  // const joinData = [...useData.announcements, ...useData.errors];

  const dataDSC = useData.errors.sort(
    (curr, next) =>
      -new Date(next.createdOn).getTime() - new Date(curr.createdOn).getTime()
  );

  return (
    <div className="py-5">
      {useData.announcements.map((item, key) => (
        <div
          key={key}
          className="border border-b-2 border-l-[#6AE6C6] border-gray-300 border-l-8  rounded w-full grid grid-cols-12 mb-4 last:mb-0"
        >
          <div className="icon col-span-2 flex p-2">
            <img src={icon_announce} alt="" className="mr-3" />
            <p>Announcement</p>
          </div>
          <div className="day col-span-2 p-2 flex">
            <p className="mr-2">{moment(item.createdOn).format("MMM Do YY")}</p>
            <span>ago</span>
          </div>
          <div className="content col-span-7 p-2">{item.title}</div>
          <div className="button border-l-2 flex items-center justify-center col-span-1">
            <button>
              <img src={icon_remove} alt="" />
            </button>
          </div>
        </div>
      ))}
      {dataDSC.map((item, key) => (
        <div
          key={key}
          className="border border-b-2 border-l-[#e61d2b] border-gray-300 border-l-8  rounded w-full grid grid-cols-12 mb-4 last:mb-0"
        >
          <div className="icon col-span-2 flex p-2">
            <img src={icon_alert} alt="" className="mr-3" />
            <p>Event Error</p>
          </div>
          <div className="day col-span-2 p-2 flex">
            <p className="mr-2">{moment(item.createdOn).format("MMM Do YY")}</p>
            <span>ago</span>
          </div>
          <div className="content col-span-7 p-2">{item.title}</div>
          <div className="button border-l-2 flex items-center justify-center col-span-1">
            <button>
              <img src={icon_remove} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
