import React from "react";
import PropTypes from "prop-types";

const HistoryToggle = (props) => (
  <div className="control-panel my-2 mx-1">
    <button
      className="btn btn-block text-secondary"
      disabled={!props.anyHistory}
      onClick={props.onToggleHistory}
    >
      <i className="fa fa-history fa-2x"></i>
    </button>
  </div>
);

HistoryToggle.defaultProps = {
  anyHistory: false,
  onToggleHistory: () => console.log("toggle history"),
};

HistoryToggle.propTypes = {
  anyHistory: PropTypes.bool,
  onToggleHistory: PropTypes.func,
};

export default HistoryToggle;
