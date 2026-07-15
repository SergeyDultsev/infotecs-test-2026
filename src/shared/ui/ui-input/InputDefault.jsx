import InputStyle from './InputDefault.module.scss';

export const InputDefault = ({ value, onChange, type, placeholder, variant }) => {
    return (
        <input
            className={InputStyle[`input__${variant}`]}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    );
};