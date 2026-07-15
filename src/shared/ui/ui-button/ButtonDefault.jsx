import styles from './ButtonDefault.module.scss';

export const ButtonDefault = ({ onClick, text, icon }) => {
    return (
        <button
            className={styles['btn__default']}
            onClick={onClick}
        >
            {icon} {text}
        </button>
    );
};