import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";

import { useUserMails } from "../../context/MailsContext";
import "./mail-view.css";
export const MailView = () => {
  const userMails = useUserMails();
  const [mail, setMail] = useState(null);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const getData = async () => {
      let mailSelect = await userMails.getMail(id);
      setMail(mailSelect);
    };
    getData();
  }, [id]);
  return mail ? (
    <div className="mail-view">
      <div className="mail-first-row">
        <div className="btn-back" onClick={history.goBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              id="ic_arrow_back_24px"
              d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z"
              transform="translate(-4 -4)"
            />
          </svg>
        </div>

        <div className="mail-view-right">
          <div className="mail-time">
            {moment(mail.timeStamp).isSame(moment(), "day")
              ? moment(mail.timeStamp).format("h:mm A")
              : moment(mail.timeStamp).format("MMM D")}
          </div>
          <div>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 1024 1024"
              width="1em"
              height="1em"
              fill="currentColor"
            >
              <path
                d="M537.016,909.264c-7.034,0-14.006-2.372-19.671-6.97L18.508,496.986C11.232,491.055,7,482.161,7,472.781
 c0-9.374,4.232-18.267,11.508-24.204L517.345,43.272c9.318-7.551,22.258-9.104,33.064-3.959
 c10.871,5.175,17.785,16.135,17.785,28.162v219.277c243.388,16.107,436.483,219.246,436.483,466.625v62.353
 c0,12.18-7.097,23.235-18.147,28.314c-11.054,5.119-24.054,3.292-33.311-4.626l-52.55-45.027
 c-93.318-79.986-210.359-126.841-332.476-133.66v217.36c0,12.022-6.914,22.986-17.785,28.158
 C546.146,908.262,541.58,909.268,537.016,909.264L537.016,909.264z M125.715,472.781L506.65,782.309V614.776
 c0-15.697,12.702-28.401,28.399-28.401c134.946,0,265.707,48.367,368.18,136.193l0.972,0.834
 c-2.664-201.286-167.231-364.213-369.148-364.213c-15.699,0-28.4-12.704-28.4-28.399V163.258
 C506.65,163.258,125.715,472.781,125.715,472.781L125.715,472.781z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mail-from">
        From: {`${mail.mailDetails.name} <${mail.mailDetails.from}>`}
      </div>
      <div className="mail-to">To: {mail.mailDetails.to}</div>
      <div className="mail-subject">{mail.mailDetails.subject}</div>
      <div className="mail-body">{mail.mailDetails.body}</div>
    </div>
  ) : (
    <div>Loading</div>
  );
};
