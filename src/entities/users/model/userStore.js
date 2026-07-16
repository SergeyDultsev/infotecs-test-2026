import { makeAutoObservable } from 'mobx';
import { PAGINATION_LIMIT } from "@shared";

class UserStore {
    users = [];
    limit = PAGINATION_LIMIT;
    currentPage = 1;
    total = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setUsers(users) {
        this.users = users;
    }

    setCurrentPage(currentPage) {
        if (currentPage >= 1) this.currentPage = currentPage;
    }

    setTotal(total) {
        this.total = total;
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    get totalPages() {
        return Math.ceil(this.total / this.limit);
    }

    get getUsers() {
        return this.users;
    }
}

export const userStore = new UserStore();