document.addEventListener('DOMContentLoaded', () => {
    // Abrir modal para información
    document.querySelectorAll('.info-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const target = document.getElementById(button.getAttribute('data-target'));
            if (target) target.style.display = 'flex';
        });
    });

    // Abrir modal para imágenes
    document.querySelectorAll('.image-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const target = document.getElementById(button.getAttribute('data-target'));
            if (target) target.style.display = 'flex';
        });
    });

    // Cerrar modal
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeBtn.parentElement.parentElement.style.display = 'none';
        });
    });

    // Cerrar modal de información
    document.querySelectorAll('.info-tab .close-info').forEach(closeBtn => {
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

    // Cerrar pestaña de información al hacer clic fuera del contenido
    document.querySelectorAll('.info-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            if (e.target === tab) tab.style.display = 'none';
        });
    });
});
