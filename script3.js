document.addEventListener('DOMContentLoaded', () => {
    // Abrir modal
    document.querySelectorAll('.open-modal').forEach(img => {
        img.addEventListener('click', (e) => {
            const target = document.getElementById(img.getAttribute('data-target'));
            if (target) target.style.display = 'flex';
        });
    });

    // Cerrar modal
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeBtn.parentElement.parentElement.style.display = 'none';
        });
    });

    // Cerrar modal al hacer clic fuera del contenido
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    });
});
