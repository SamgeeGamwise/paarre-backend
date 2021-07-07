import Interest from "./Interest";

export default class Profile {
    private _details: string;
    private _interests: Interest[];
    constructor(details: string, interests: Interest[]) {
        this._details = details;
        this._interests = interests;
    }

    get details(): string {
        return this._details;
    }

    set details(value: string) {
        this._details = value;
    }

    get interests(): Interest[] {
        return this._interests;
    }

    set interests(value: Interest[]) {
        this._interests = value;
    }
}
