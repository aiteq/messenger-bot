/**
 * An abstract parent class for builders.
 */
export abstract class AbstractBuilder<T> {

	/**
     * Creates an isntance of desired class.
     * 
     * @returns {T} 
     */
    public abstract build(): T;
}