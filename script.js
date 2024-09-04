let username = '';
let currentCandidateIndex = 0;

const candidates = [
    {
        name: 'Gabriel Felipe Torres Parras',
        info: `Gabriel Felipe Torres Parras (1101 - Personero)
            1. Grupo de apoyo para la salud mental.
            2. Apoyar a los animales afectados por las catástrofes ambientales.
            3. Espacios deportivos adecuados.
            4. Días SETER (Comunicación, Trabajo en Equipo y Relajación).
            5. Grupo de apoyo para la mujer.`
    },
    {
        name: 'María Fernanda Moreno Rodríguez',
        info: `María Fernanda Moreno Rodríguez (1102 - Personero)
            1. Elección de la parte inferior del uniforme diario para las mujeres.
            2. Talleres de primeros auxilios.
            3. Día de la familia.
            4. Revista digital o impresa del sello estudiantil.`
    },
    {
        name: 'Juan Pablo Fuentes Quevedo',
        info: `Juan Pablo Fuentes Quevedo (1103 - Personero)
            1. Formación de clubes para la integración de estudiantes.
            2. Grupos y clases de salud mental.
            3. Creación de canales de comunicación para fomentar la creatividad y la voz estudiantil.
            4. Representación de actividades generadas en los clubes en eventos escolares.`
    },
    {
        name: 'Luzas Simón Giraldo Méndez',
        info: `Luzas Simón Giraldo Méndez (1104 - Personero)
            1. Recolección de tapas plásticas para la fundación Tapitas por Patitas.
            2. Integración de nuevos deportes en la institución.
            3. Reavivar bloques de formación lúdicos y recreativos.
            4. Creación de una piscina en el patio de la 17.`
    },
    {
        name: 'Salomé Gómez Gutiérrez',
        info: `Salomé Gómez Gutiérrez (902 - Contralor)
            1. Facilitar el paso y mejorar la distribución del espacio en la cafetería.
            2. Proveer conocimientos sobre finanzas y manejo del dinero a los estudiantes.
            3. Campañas de concientización sobre el uso del espacio y recursos escolares.`
    },
    {
        name: 'Daniel Esteban Soler Ladino',
        info: `Daniel Esteban Soler Ladino (1005 - Contralor)
            1. Campañas para el buen uso de los materiales institucionales.
            2. Buzón de quejas, peticiones y reclamos.
            3. Apoyo económico al grupo ambiental (GART).
            4. Creación de grupos de apoyo académico en Teams.`
    }
];

function nextStep() {
    username = document.getElementById('username').value;
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('candidate-list-section').style.display = 'block';
    document.getElementById('profile-info').innerText = 'Usuario: ' + username;
}

function showCandidate(index) {
    currentCandidateIndex = index;
    displayCandidateInfo();
}

function displayCandidateInfo() {
    document.getElementById('candidate-list-section').style.display = 'none';
    document.getElementById('candidate-info-section').style.display = 'block';
    document.getElementById('candidate-info').innerText = candidates[currentCandidateIndex].info;
}

function previousCandidate() {
    if (currentCandidateIndex > 0) {
        currentCandidateIndex--;
        displayCandidateInfo();
    }
}

function nextCandidate() {
    if (currentCandidateIndex < candidates.length - 1) {
        currentCandidateIndex++;
        displayCandidateInfo();
    }
}

function goBack() {
    document.getElementById('candidate-info-section').style.display = 'none';
    document.getElementById('candidate-list-section').style.display = 'block';
}

function showAbout() {
    document.getElementById('candidate-list-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'block';
}

function showProfile() {
    document.getElementById('candidate-list-section').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block';
}

function showComments() {
    document.getElementById('candidate-list-section').style.display = 'none';
    document.getElementById('comments-section').style.display = 'block';
}

function submitComment() {
    const comment = document.getElementById('comment').value;
    if (comment) {
        alert('Comentario enviado: ' + comment);
        document.getElementById('comment').value = '';
    } else {
        alert('Por favor, escribe un comentario.');
    }
}
