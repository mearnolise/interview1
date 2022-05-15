import React from "react";
import PropTypes from "prop-types";
import './ToggleSwitch.scss';

const ToggleSwitch = ({ id, name, checked, onChange}) => {

  return (
    <div className={"toggle-switch"}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        />
        {id ? (
          <label className="toggle-switch-label" htmlFor={id}>
            <span
              className={"toggle-switch-inner"}
            />
            <span
              className={"toggle-switch-switch"}
            />
          </label>
        ) : null}
      </div>
    );
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default ToggleSwitch;