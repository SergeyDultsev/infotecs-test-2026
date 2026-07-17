import style from './UserModal.module.scss';

export const UserModal = ({user}) => {
    return (
        <section className={style['user-modal']}>
            <h2 className={style['user-modal__name']}>{user.firstName} {user.lastName}</h2>
            <img className={style['user-modal__avatar']} src={user.image} alt={user.firstName} />

            <div className={style['user-modal__info']}>
                <p className={style['user-modal__info-text']}>Email: {user.email}</p>
                <p className={style['user-modal__info-text']}>Age: {user.age}</p>
                <p className={style['user-modal__info-text']}>Gender: {user.gender}</p>
                <p className={style['user-modal__info-text']}>Email: {user.email}</p>
                <p className={style['user-modal__info-text']}>Phone: {user.phone}</p>
            </div>
        </section>
    );
}