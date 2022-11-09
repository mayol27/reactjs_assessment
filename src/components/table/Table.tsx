import React from "react";
import data from "./../../assets/mock_data.json";

import icon_announce from "./../../assets/icons/megaphone.svg";
import icon_alert from "./../../assets/icons/alert-circle.svg";
import icon_remove from "./../../assets/icons/remove.svg";
import moment from "moment";
import cn from "classnames";

function Table() {
  const [useData, setUseData] = React.useState(data);

  const list = [
    ...useData.announcements.map((e) => ({ ...e, type: "announcements" })),
    ...useData.errors.map((e) => ({ ...e, type: "errors" })),
  ];

  const dataDSC = list.sort(
    (curr, next) =>
      new Date(next.createdOn).getTime() - new Date(curr.createdOn).getTime()
  );

  return (
    <div className="py-5">
      {dataDSC.map((item, key) => (
        <div
          key={key}
          className={cn(
            "border border-b-2  border-gray-300 border-l-8  rounded w-full grid grid-cols-12 mb-4 last:mb-0",
            item.type === "errors" ? "border-l-[#e61d2b]" : "border-l-[#6AE6C6]"
          )}
        >
          <div className="icon col-span-2 flex p-2">
            <img
              src={item.type === "errors" ? icon_alert : icon_announce}
              alt=""
              className="mr-3"
            />
            <p>{item.type === "errors" ? "Event Error" : "Announcement"}</p>
          </div>
          <div className="day col-span-2 p-2 flex">
            <p className="mr-2">{moment(item.createdOn).format("MMM Do YY")}</p>
            <span>ago</span>
          </div>
          <div className="content col-span-7 p-2">{item.title}</div>
          <div className="button border-l-2 flex items-center justify-center col-span-1">
            <button className="hover:bg-red-700 rounded-full">
              <img src={icon_remove} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
