import { makeAutoObservable  } from 'mobx';

class UserStore {
    users = [];
    limit = 30;
    currentPage = null;
    total = null;

    constructor() {
        makeAutoObservable(this);
    }

    setUsers(users) {
        this.users = users;
    }

    setCurrentPage(currentPage) {
        this.currentPage = currentPage;
    }

    setTotal(total) {
        this.total = total;
    }

    get getPagination() {
        return Array.from({ length: this.total ?? 0 }, (_, i) => i + 1);
    }

    get getUsers() {
        return this.users;
    }
}

export const userStore = new UserStore();