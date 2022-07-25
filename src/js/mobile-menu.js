(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const closeModalBtn = document.querySelector("[data-menu-button-close]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
        document.body.classList.toggle("no-scroll")
    });

    closeModalBtn.addEventListener('click' , () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
        document.body.classList.toggle("no-scroll")
    });
})();