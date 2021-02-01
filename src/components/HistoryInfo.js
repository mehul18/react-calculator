import React from "react";
import PropTypes from "prop-types";

const HistoryInfo = (props) => (
  <div className="history">
    {props.history.map((expression, i) => {
      return (
        <div className="history-item" key={i}>
          <button
            className="btn btn-block btn-light"
            onClick={() => props.onSelected(i)}
          >
            <div className="p-2 text-right">
              <div>{expression.expression}&nbsp;=</div>
              <div className="font-weight-bold">{expression.result}</div>
            </div>
          </button>
        </div>
      );
    })}
    <div className="history-trash" onClick={props.onClearHistory}>
      <div className="text-right text-danger">
        <i className="fa fa-trash-o fa-2x my-2"></i>
      </div>
    </div>
  </div>
);

HistoryInfo.defaultProps = {
  history: [],
  onClearHistory: () => console.log("clear history"),
  onSelected: () => console.log("selected"),
};

HistoryInfo.propTypes = {
  history: PropTypes.array,
  onClearHistory: PropTypes.func,
  onSelected: PropTypes.func,
};

export default HistoryInfo;
