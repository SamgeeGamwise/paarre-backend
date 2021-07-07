import Profile from "./Profile";
import User from "./User";

export default class Account {
    private _isAdmin: boolean;
    private _id: number;
    private _profile: Profile;
    private _user1: User;
    private _user2: User;

    constructor(isAdmin: boolean, id: number, profile: Profile, user1: User, user2: User) {
        this._isAdmin = isAdmin;
        this._id = id;
        this._profile = profile;
        this._user1 = user1;
        this._user2 = user2;
    }

    get isAdmin() {
        return this._isAdmin;
    }
    set isAdmin(value) {
        this._isAdmin = value;
    }

    get id() {
        return this._id;
    }

    get profile() {
        return this._profile;
    }
    set profile(value) {
        this._profile = value;
    }

    get user1() {
        return this._user1;
    }
    set user1(value) {
        this._user1 = value;
    }

    get user2() {
        return this._user2;
    }
    set user2(value) {
        this._user2 = value;
    }
}
