import styles from './ButtonDefault.module.scss';

export const ButtonDefault = (
    {
        onClick,
        text,
        icon,
        disabled,
        isActive,
    }) =>
{
    const className = [
        styles['btn__default'],
        isActive && styles['btn__active'],
    ].filter(Boolean).join(' ');

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {icon} {text}
        </button>
    );
};