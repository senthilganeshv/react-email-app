import moment from "moment";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import "./mail-row.css";

export const MailRow = ({
  id,
  name,
  categories = [],
  subject,
  time,
  isRead,
  event,
  onSelect,
}) => {
  const [categoriesList] = useLocalStorage("categories", categories);

  const CategoryBox = () => {
    let category = categoriesList.find((c) => c.name === categories[0]);
    return (
      <div
        className="category-name"
        style={
          category && { backgroundColor: `var(--color-${category.color})` }
        }
      >
        {categories[0]}
      </div>
    );
  };
  return (
    <div className={`mail-row ${isRead ? "" : "unread"}`}>
      <label className="checkbox">
        <input type="checkbox" onChange={onSelect} />
        <span className="checkmark"></span>
      </label>
      <div className="mail-summary" onClick={event}>
        <div className="name">
          <div>{name}</div>
          <div className="categories">
            <CategoryBox />
          </div>
        </div>
        <div className="time">
          {moment(time).isSame(moment(), "day")
            ? moment(time).format("hh:mm A")
            : moment(time).format("MMM D")}
        </div>
        <div className="subject">{subject}</div>
      </div>
    </div>
  );
};
