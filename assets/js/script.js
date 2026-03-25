// Fecha Abas
document.addEventListener('click', function (event) {
    const accordionElement = document.querySelector('#accordionExample');
    const isClickInside = accordionElement.contains(event.target);

    if (!isClickInside) {
        // Seleciona todas as seções do accordion
        const accordionItems = accordionElement.querySelectorAll('.accordion-collapse');

        accordionItems.forEach(item => {
            if (item.classList.contains('show')) {
                // Remove a classe "show" para fechar o item
                bootstrap.Collapse.getInstance(item).hide();
            }
        });
    }
});
