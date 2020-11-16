export abstract class BaseModel {
    public id: number;

    public getId() {
        return this.id;
    }

    public from<T = BaseModel, K = Partial<T>>(input: K) {
        return Object.assign(this, input);
    }

    toString() {
        return JSON.stringify(this);
    }
}
