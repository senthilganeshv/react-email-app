import moment from "moment";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import "./mail-row.css";

export const MailRow = ({
  id,
  name,
  to,
  folder,
  categories = [],
  subject,
  time,
  attachment,
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
    <div className={`mail-row ${isRead ? "read-mail" : "unread-mail"}`}>
      <label className="checkbox">
        <input type="checkbox" onChange={onSelect} />
        <span className="checkmark"></span>
      </label>
      <div className="mail-summary" onClick={event}>
        <div className="name">
          <div>{folder === "sent" ? `To: ${to}` : name}</div>
          <div className="categories">
            <CategoryBox />
          </div>
        </div>
        <div className="attachment">
          {attachment && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              viewBox="0 0 448 512"
            >
              <path
                d="M45.9,102.8C97,53.3,179.4,54.2,230.3,104l181.9,177.8c38.4,37.6,38.4,98.6,0,136.2c-38.1,37.2-99.5,37.2-137.6,0L116.2,263
	c-25.9-25.3-25.5-66.7,0.8-91.5c25.4-24,65.7-23.2,90.7,1.2l124.5,121.8c5.4,5.2,5.4,13.8,0.2,19.2l-19,19.4
	c-5.2,5.4-13.8,5.4-19.2,0.2L169.8,211.4c-4.3-4.2-11.4-4.4-15.5-0.5c-3.9,3.7-4,9.5-0.1,13.3l158.4,155c17,16.6,44.7,16.6,61.7,0
	c16.6-16.3,16.6-42.3,0-58.6L192.4,142.7c-30.1-29.5-78.9-29.9-108.8-1c-29.7,28.8-29.8,75.4-0.2,104.3l149.2,145.8
	c5.4,5.2,5.5,13.8,0.2,19.2l-19,19.4c-5.2,5.4-13.8,5.5-19.2,0.2L45.5,284.8C-6.2,234.3-5.6,152.6,45.9,102.8L45.9,102.8z"
              />
            </svg>
          )}
        </div>
        <div className="time">
          {moment(time).isSame(moment(), "day")
            ? moment(time).format("h:mm A")
            : moment(time).format("MMM D")}
        </div>
        <div className="subject">{subject ? subject : "(no subject)"}</div>
      </div>
    </div>
  );
};
