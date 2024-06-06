/* eslint-disable import/no-anonymous-default-export */
/**
 * This class provides methods for setting, getting, and erasing cookies.
 * @class
 * @example
 * ```typescript
 * import Cookies from "./cookies";
 *
 * // Set a cookie with the name "myCookie" and the value "myValue" that expires in 7 days
 * Cookies.setCookie("myCookie", "myValue", 7);
 *
 * // Get the value of the cookie with the name "myCookie"
 * let value = Cookies.getCookie("myCookie");
 *
 * // Erase the cookie with the name "myCookie"
 * Cookies.eraseCookie("myCookie");
 * ```
 */
class Cookies {
  /**
   * Sets a cookie with the specified name, value, and expiration days.
   * @param name - The name of the cookie.
   * @param value - The value of the cookie.
   * @param days - The number of days until the cookie expires.
   */
  setCookie(name: string, value: string, days: number) {
    if (typeof window === "undefined") return;
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  /**
   * Retrieves the value of a cookie by its name.
   * @param name - The name of the cookie.
   * @returns The value of the cookie, or null if the cookie does not exist.
   */
  getCookie(name: string): string | null {
    if (typeof window === "undefined") return null;
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);

      return null;
    }
    return null;
  }

  /**
   * Erases a cookie with the specified name.
   * @param name - The name of the cookie to erase.
   */
  eraseCookie(name: string) {
    if (typeof window === "undefined") return;
    document.cookie = name + "=; Max-Age=-99999999;";
  }
}

export default new Cookies();
