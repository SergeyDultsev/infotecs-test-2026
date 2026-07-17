import InputStyle from './InputDefault.module.scss';

export const InputDefault = ({ value, onChange, type, placeholder, variant, onKeyDown }) => {
    return (
        <input
            className={InputStyle[`input__${variant}`]}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            onKeyDown={onKeyDown}
        />
    );
};