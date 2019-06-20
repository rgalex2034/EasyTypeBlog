abstract class Result<T, E>{
    protected value: T;
    protected error: E;

    abstract unwrap_or(def: T): T;
    abstract expect(error: string): T | never;
    abstract handle(): E | never;
    abstract is_err(): boolean;
    abstract is_ok(): boolean;
}

class Ok<T> extends Result<T, any>{

    constructor(value: T) {
        super();
        this.value = value;
    }

    unwrap_or(def) {
        return this.value;
    }

    expect(error): T {
        return this.value;
    }

    handle(): never{
        throw new Error("Can't handle an Ok value!");
    }

    is_err() {
        return false;
    }

    is_ok() {
        return true;
    }
}

class Err<T, E> extends Result<T, E>{

    constructor(error: E) {
        super();
        this.error = error;
    }

    unwrap_or(def) {
        return def;
    }

    expect(error): never {
        console.error(this.error);
        throw new Error(error);
    }

    handle(): E {
        return this.error;
    }

    is_err() {
        return true;
    }

    is_ok() {
        return false;
    }
}

export {Result as default, Ok, Err};
