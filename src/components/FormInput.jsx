import PropTypes from "prop-types";

const FormInput = (props) => {
  return (
    <div>
      <label
        htmlFor="input"
        className="block text-gray-700 uppercase font-bold"
      >
        {props.label}
      </label>
      <input
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      ></input>
    </div>
  );
};

FormInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
