(() => {
    const storageKey = "guoning-theme";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let preference = null;
    let buttons = [];

    try {
        const savedTheme = window.localStorage.getItem(storageKey);
        if (savedTheme === "light" || savedTheme === "dark") preference = savedTheme;
    } catch {
        // Theme switching still works when browser storage is unavailable.
    }

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        const nextTheme = theme === "dark" ? "light" : "dark";

        buttons.forEach((button) => {
            button.querySelector("[data-theme-label]").textContent = nextTheme === "dark" ? "Dark" : "Light";
            button.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
            button.title = `Switch to ${nextTheme} mode`;
        });

        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) themeColor.content = theme === "dark" ? "#16181b" : "#ffffff";
    }

    function preferredTheme() {
        return preference || (systemTheme.matches ? "dark" : "light");
    }

    // This script runs in the head so the correct theme is set before styles load.
    applyTheme(preferredTheme());

    systemTheme.addEventListener("change", () => {
        if (!preference) applyTheme(preferredTheme());
    });

    document.addEventListener("DOMContentLoaded", () => {
        buttons = document.querySelectorAll(".theme-toggle");
        buttons.forEach((button) => {
            button.hidden = false;
            button.addEventListener("click", () => {
                preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
                try {
                    window.localStorage.setItem(storageKey, preference);
                } catch {
                    // Keep the choice for this page even if it cannot be saved.
                }
                applyTheme(preference);
            });
        });
        applyTheme(preferredTheme());
    }, { once: true });
})();
