import "./modal.css";
export const Modal = ({
  show = false,
  children,
  buttons = [],
  header = "",
  content = "",
}) => {
  const showHideClassName = show ? " display-block" : " display-none";
  const close = buttons.find((b) => b.type === "close");
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {header && (
          <div className="modal-header">
            <h3>{header}</h3>
            <div onClick={close.func}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  id="ic_close_24px"
                  d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"
                  transform="translate(-5 -5)"
                />
              </svg>
            </div>
          </div>
        )}
        {content && (
          <div
            className="modal-content"
            dangerouslySetInnerHTML={{ __html: `${content}` }}
          ></div>
        )}

        {children}
        <div className="modal-buttons">
          {buttons.length > 0 &&
            buttons.map((btn) => {
              return (
                <button
                  key={btn.name}
                  onClick={btn.func}
                  className={btn.cssClass}
                >
                  {btn.name}
                </button>
              );
            })}
        </div>
      </section>
    </div>
  );
};
