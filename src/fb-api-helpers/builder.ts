/**
 * An abstract parent class for builders.
 */
export abstract class Builder<T> {

    /**
     * Creates an isntance of desired class.
     *
     * @returns {T}
     */
    public abstract build(): T;
}
