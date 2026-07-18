import { makeAutoObservable } from 'mobx';
import { PAGINATION_LIMIT } from "@shared";

class UserStore {
    users = [];
    limit = PAGINATION_LIMIT;
    currentPage = 1;
    total = 0;
    filterKey = null;
    sortBy = null;
    order = null;

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

    setFilter(key) {
        this.filterKey = key;
        this.currentPage = 1;
    }

    setSort(sortBy, order) {
        this.sortBy = sortBy;
        this.order = order;
        this.currentPage = 1;
    }

    get totalPages() {
        return Math.ceil(this.total / this.limit) || 1;
    }

    get paginatedUsers() {
        return this.users;
    }

    get skip() {
        return (this.currentPage - 1) * this.limit;
    }
}

export const userStore = new UserStore();
