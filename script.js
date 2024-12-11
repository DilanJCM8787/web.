// Información de cada sección
const modalData = {
    introduccion: {
        title: "Introducción",
        text: "La electricidad es un servicio fundamental para el desarrollo social y económico de las comunidades. Su gestión eficiente es vital para asegurar un suministro confiable que satisfaga la demanda de hogares, industrias y comercios. En Bolivia, la Empresa Nacional de Electricidad (ENDE) ha sido la principal entidad encargada de la generación, transmisión y distribución de energía eléctrica. Con el objetivo de mejorar la eficiencia y la transparencia en la administración de este recurso, se plantea un sistema de automatización que optimice los procesos de medición, facturación y atención al cliente, transformando la operación de la empresa en una estructura más moderna y accesible.",
        image: ""
    },
    antecedentes: {
        title: "Antecedentes",
        text: "ENDE fue creada en 1961 con la misión de gestionar los recursos energéticos del país, garantizando la generación, transmisión y distribución de electricidad. La empresa ha enfrentado el reto de atender la creciente demanda y de adaptarse a normativas y regulaciones gubernamentales, especialmente en cuanto a la estabilidad, sostenibilidad y equidad en la prestación de sus servicios. A lo largo de los años, la expansión y diversificación de sus actividades han resaltado la necesidad de adoptar nuevas tecnologías que permitan un control más preciso y eficiente de sus operaciones, así como una mejor atención a los usuarios.",
        image: ""
    },
    problema: {
        title: "Planteamiento del Problema",
        text: "El servicio de electricidad en Bolivia enfrenta desafíos en la precisión de la medición del consumo y en la gestión de la facturación, lo que afecta tanto la eficiencia operativa como la satisfacción de los usuarios. El proceso actual, en gran parte manual, puede llevar a discrepancias en el registro del consumo y a errores en la facturación. Además, la atención al cliente presenta limitaciones en términos de rapidez y disponibilidad de información. Para abordar estas problemáticas, se propone un sistema de automatización que permita integrar la medición inteligente, la facturación automatizada y una plataforma de atención al cliente, logrando una gestión más precisa y transparente del servicio eléctrico en el país.",
        image: ""
    },
    arbol: {
        title: "Árbol de Problemas",
        text: "Los cortes frecuentes en el suministro de luz están impactando negativamente a la comunidad y frenando el desarrollo económico de la región. Este problema se debe a una combinación de factores técnicos y administrativos. La infraestructura envejecida, el mantenimiento insuficiente, las difíciles condiciones climáticas, el consumo energético elevado y la gestión administrativa ineficaz contribuyen a la falta de confiabilidad del sistema eléctrico.",
        image: ""
    },
    formulacion: {
        title: "Formulación del Problema",
        text: "Los efectos son variados y graves: la economía local sufre debido a la reducción en la productividad y el aumento de costos operativos, los usuarios se sienten insatisfechos y pierden confianza en la compañía, la contaminación aumenta por el uso de generadores a diésel, y la región experimenta un crecimiento limitado. Esta situación exige medidas urgentes para mejorar la infraestructura, optimizar el mantenimiento y fortalecer la administración del sistema eléctrico.",
        image: ""
    },
    proposito: {
        title: "Propósito del Estudio",
        text: "El propósito de este estudio es identificar, analizar y entender las causas y efectos de los cortes frecuentes en el suministro de energía eléctrica en una región determinada, con el fin de desarrollar estrategias efectivas para mejorar la confiabilidad y eficiencia del sistema de suministro eléctrico. Al abordar tanto los factores técnicos como administrativos que contribuyen a esta problemática, este estudio busca proponer soluciones que reduzcan la frecuencia y duración de las interrupciones, minimicen el impacto en la economía local y en la vida de los usuarios, y promuevan el crecimiento sostenible de la región.",
        image: ""
    }
};

// Función para abrir el modal y cargar contenido
function openModal(section) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");
    const image = document.getElementById("modal-image");

    // Configurar el contenido
    title.textContent = modalData[section].title;
    text.textContent = modalData[section].text;
    if (modalData[section].image) {
        image.src = modalData[section].image;
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }

    // Mostrar modal
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
