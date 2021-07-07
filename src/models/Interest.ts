export default class Interest {
    private _name: string;
    private _category: string;
    private _type: string;

    constructor(name: string, category: string, type: string) {
        this._name = name;
        this._category = category;
        this._type = type;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get category(): string {
        return this._category;
    }
    set category(value: string) {
        this._category = value;
    }

    get type(): string {
        return this._type;
    }
    set type(value: string) {
        this._type = value;
    }
}
