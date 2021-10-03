import PropTypes from "prop-types";
import { Fragment } from "react";

const DataItem = ({ label, percentage }) => {
  return (
    <Fragment>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </Fragment>
  );
};

DataItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default DataItem;
