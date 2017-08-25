/**
 * Represents a Chat Extension.
 */
export interface ChatExtension {
  /**
   * Returns a data to be rendered to extension's view.
   *
   * @returns {*} - a data to be rendered
   */
  getData(): any;

  /**
   * Returns a name of extension's view.
   *
   * @returns {string} - a name of extension's view
   */
  getView(): string;
}
