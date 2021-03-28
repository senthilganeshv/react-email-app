import "./modal.css";
export const Modal = ({
  show = false,
  children,
  buttons = [],
  header = "",
  content = "",
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {header && (
          <div className="modal-header">
            <h3>{header}</h3>
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
