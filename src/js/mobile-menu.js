(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-button]"),
        closeMenuBtn: document.querySelector("[data-menu-button-close]"),

        openModalBtn: document.querySelector("[data-modal-btm-open]"),

        menu: document.querySelector("[data-menu]"),
        

        body: document.querySelector("body"),
        
        header: document.querySelector("[data-header]"),
        reviews: document.querySelector("[data-reviews]"),
        howitsmade: document.querySelector("[data-howitsmade]"),
        products: document.querySelector("[data-products]"),
        contacts: document.querySelector("[data-contacts]"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    refs.openModalBtn.addEventListener("click", toggleMenu,toggleModal);

    refs.header.addEventListener("click", toggleMenu);
    refs.reviews.addEventListener("click", toggleMenu);
    refs.howitsmade.addEventListener("click", toggleMenu);
    refs.products.addEventListener("click", toggleMenu);
    refs.contacts.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        refs.body.classList.toggle("no-scroll"); 
    }
    
    function toggleModal() {
        refs.modal.classList.toggle('is-open');
    }

})();