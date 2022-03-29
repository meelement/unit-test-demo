/**
 * Returns current date & time
 * @returns 
 */
export function getCurrentDateTime() {
    var date = new Date();
    var userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - userTimezoneOffset);
}