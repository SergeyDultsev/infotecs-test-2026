import styles from './ButtonDefault.module.scss';

export const ButtonDefault = ({ onClick, text, icon, disabled }) => {
    return (
        <button
            className={styles['btn__default']}
            onClick={onClick}
            disabled={disabled}
        >
            {icon} {text}
        </button>
    );
};