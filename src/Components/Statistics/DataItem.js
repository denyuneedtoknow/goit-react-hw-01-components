import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { Fragment } from 'react';

const DataItem = ({ label, percentage }) => {
  return (
    <Fragment>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </Fragment>
  );
};

DataItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default DataItem;
