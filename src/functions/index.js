export const GetDefaultTheam = () => {
    let isDark = true;
    if (localStorage.getItem("isDarkTheme")) {
        isDark = localStorage.getItem("isDarkTheme") === "true"
    } else {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            isDark = true;
        } else {
            isDark = false;
        }
    }
    return isDark
}