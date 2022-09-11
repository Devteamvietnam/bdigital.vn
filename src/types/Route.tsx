import { ComponentType, FC } from 'react';

/**
 * Represents the route of a page.
 * By ddthien
 */
export type Route = {
  /**
   * The key of the route
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "dashboard"
   */
  key: string;

  /**
   * The title of the route
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "Home"
   */
  title: string;

  /**
   * The description of the route
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "Go to My Home Page"
   */
  description?: string;

  /**
   * The path of the route
   * @type {string}
   * @memberof Route
   * @required
   * @example
   * "/home"
   */
  path?: string;

  /**
   * The component referenced by the route
   * @type {FC}
   * @memberof Route
   * @required
   * @example
   * "<Home />"
   */
  component?: FC<{}>;

  /**
   * The status of the route
   * @type {boolean}
   * @memberof Route
   * @required
   * @example
   * true
   * @default
   * true
   */
  isEnabled: boolean;

  /**
   * The icon that illustrates the route
   * @type {string}
   * @memberof Route
   * @optional
   * @example
   * HomeIcon
   */
  icon?: ComponentType;

  /**
   * The array of sub routes
   * @type {Route[]}
   * @memberof Route
   * @optional
   * @example
   * "[{} as Route, ...]"
   */
  subRoutes?: Route[];

  /**
   * The divider indicator for the route
   * @type {boolean}
   * @memberof Route
   * @optional
   * @example
   * true
   * @default
   * false
   */
  appendDivider?: boolean;

  /**
   * Indicate of menu item is expanded
   * @type {boolean}
   * @memberof Route
   * @optional
   * @example
   * true
   * @default
   * false
   */
  expanded?: boolean;
};
