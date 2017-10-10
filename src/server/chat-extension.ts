/**
 * Represents a Chat Extension.
 */
export abstract class ChatExtension {

    private url: string;

    constructor(private view: string) {}

    /**
     * Returns a data to be rendered to extension's view.
     *
     * @returns {*} - a data to be rendered
     */
    public abstract getModel(): any;

    /**
     * Returns a name of extension's view.
     *
     * @returns {string} - a name of extension's view
     */
    public getView(): string {
        return this.view;
    }

    /**
     * Sets base URL for this extension.
     *
     * @param {string} baseUrl
     */
    public setBaseUrl(baseUrl: string): void {
        this.url = baseUrl + this.view;
    }

    /**
     * Returns URL of this extension.
     *
     * @returns {string} - URL of this extension
     */
    public getUrl(): string {
        return this.url;
    }
}
