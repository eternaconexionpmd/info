// Inicializar AOS
AOS.init({ duration: 1000 });

// Funcionalidad de los acordeones
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        console.log('Clic en acordeón:', header.querySelector('h3').textContent, 'Activo:', isActive);

        // Cerrar todos los acordeones
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.classList.remove('active');
        });

        // Abrir el acordeón clicado si no estaba activo
        if (!isActive) {
            header.classList.add('active');
            content.classList.add('active');
        }
    });
});

// Funcionalidad de selección de plan y QR de pago
const planSelect = document.getElementById('plan-select');
const paymentInfo = document.getElementById('payment-info');
const selectedPlanText = document.getElementById('selected-plan');
const paymentButton = document.getElementById('payment-button');

planSelect.addEventListener('change', () => {
    const selectedPlan = planSelect.value;

    if (selectedPlan) {
        let planName = selectedPlan.split(' - ')[0];
        let planPrice = selectedPlan.split(' - ')[1];
        selectedPlanText.textContent = `Elegiste el plan ${planName} que cuesta ${planPrice}. Para continuar, realiza el pago escaneando el QR a continuación.`;
        paymentButton.href = `https://wa.me/51961360935?text=He%20realizado%20el%20pago%20para%20el%20plan%20${encodeURIComponent(selectedPlan)}.%20Adjunto%20el%20comprobante.`;
        paymentInfo.classList.add('active');
    } else {
        paymentInfo.classList.remove('active');
    }
});

// Funcionalidad del modal para imágenes
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');
const referenceImages = document.querySelectorAll('.reference-img');

referenceImages.forEach(img => {
    img.addEventListener('click', () => {
        console.log('Abriendo modal para:', img.src);
        modal.style.display = 'flex';
        modalImage.src = img.getAttribute('data-fullsrc');
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});