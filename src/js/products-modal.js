(() => {
    const modals = document.querySelectorAll('[data-products-modal]');

    modals.forEach((modal) => {
        const openModalBtn = modal.parentNode.querySelector('[data-products-modal-open]');
        const closeModalBtn = modal.parentNode.querySelector('[data-products-modal-close]');
        openModalBtn.addEventListener("click", () => toggleModal(modal));
        closeModalBtn.addEventListener("click", () => toggleModal(modal));
    });

    const toggleModal = (modal) => {
        modal.classList.toggle("is-hidden");
    }
  })();