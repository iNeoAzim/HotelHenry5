// booking.js
// Gestion dynamique du formulaire de réservation et de la confirmation

document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments du formulaire
    const adulteInput = document.getElementById('adulteInput');
    const enfantInput = document.getElementById('enfantInput');
    const chambreInput = document.getElementById('chambreInput');
    const travailInput = document.getElementById('travail');
    const ageInputContainer = document.getElementById('ageInputContainer');
    const ageInputsRow = document.getElementById('ageInputsRow');

    // Sélection des éléments de confirmation
    const confirmAdulte = document.querySelector('p:nth-child(2) strong');
    const confirmEnfant = document.querySelector('p:nth-child(3) strong');
    const confirmChambre = document.querySelector('p:nth-child(4) strong');
    const confirmTravail = document.querySelector('p:nth-child(5) strong');

    // Sélection des boutons
    const btnRechercher = document.querySelector('.btn.btn-primary');
    const btnEffacer = document.querySelector('.btn.btn-secondary');

    // Fonction pour générer dynamiquement les champs d'âge
    function updateAgeInputs() {
        const nbEnfants = parseInt(enfantInput.value) || 0;
        ageInputsRow.innerHTML = '';
        if (nbEnfants > 0) {
            ageInputContainer.style.display = '';
            for (let i = 0; i < nbEnfants; i++) {
                const col = document.createElement('div');
                col.className = 'col mb-2';
                const input = document.createElement('input');
                input.type = 'number';
                input.className = 'form-control';
                input.placeholder = `Âge enfant ${i+1}`;
                input.min = 0;
                col.appendChild(input);
                ageInputsRow.appendChild(col);
            }
        } else {
            ageInputContainer.style.display = 'none';
        }
    }

    // Mettre à jour dynamiquement les champs d'âge quand le nombre d'enfants change
    enfantInput.addEventListener('input', updateAgeInputs);
    // Initialiser à l'ouverture
    updateAgeInputs();

    btnRechercher.addEventListener('click', function() {
        // Met à jour la confirmation avec les valeurs du formulaire
        confirmAdulte.textContent = adulteInput.value;
        confirmEnfant.textContent = enfantInput.value;
        confirmChambre.textContent = chambreInput.value;
        confirmTravail.textContent = travailInput.checked ? 'Oui' : 'Non';
    });

    btnEffacer.addEventListener('click', function() {
        // Réinitialise tous les champs du formulaire
        adulteInput.value = 1;
        enfantInput.value = 0;
        chambreInput.value = 0;
        travailInput.checked = false;
        updateAgeInputs();
        // Réinitialise la confirmation
        confirmAdulte.textContent = 1;
        confirmEnfant.textContent = 0;
        confirmChambre.textContent = 0;
        confirmTravail.textContent = 'Non';
    });
});
