
const elementosFake = [
    { id: 1, tagName: 'DIV', style: { color: 'blue', display: 'flex' }, classList: ['container', 'active'] },
    { id: 2, tagName: 'H1', style: { color: 'red', display: 'block' }, classList: ['title'] },
    { id: 3, tagName: 'BUTTON', style: { color: 'white', display: 'inline-block' }, classList: ['btn', 'btn-primary'] },
    { id: 4, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
    { id: 5, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'done'] },
    { id: 6, tagName: 'SECTION', style: { color: 'gray', display: 'grid' }, classList: ['main-section'] },
    { id: 7, tagName: 'P', style: { color: 'green', display: 'block' }, classList: ['text-content'] },
    { id: 8, tagName: 'SPAN', style: { color: 'yellow', display: 'inline' }, classList: ['highlight'] },
    { id: 9, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
    { id: 10, tagName: 'FOOTER', style: { color: 'white', display: 'flex' }, classList: ['footer-area'] }
];

// Atividade 1
for (const elemento of elementosFake) {
    elemento.style.backgroundColor = '#FFFFFF';
}

console.log('Atividade 1:', elementosFake);

// Atividade 2
elementosFake.forEach(elemento => {
    for (const propriedade in elemento) {
        if (propriedade === 'id') {
            elemento.id = `ID-${String(elemento.id).padStart(2, '0')}`;
        }
    }
});

console.log('Atividade 2:', elementosFake);

// Atividade 3
elementosFake.forEach(elemento => {
    if (elemento.classList.includes('pending')) {
        elemento.classList = elemento.classList.filter(classe => classe !== 'pending');

        if (!elemento.classList.includes('done')) {
            elemento.classList.push('done');
        }

        elemento.style.color = 'green';
    }
});

console.log('Atividade 3:', elementosFake);

// Atividade 4
for (const elemento of elementosFake) {
    if (elemento.tagName === 'DIV') {
        elemento.tagName = 'SECTION';
        elemento.classList.push('converted');
    }
}

console.log('Atividade 4:', elementosFake);

// Atividade 5
const relatorioDeEstilos = [];

elementosFake.forEach(elemento => {
    relatorioDeEstilos.push({
        id: elemento.id,
        tagName: elemento.tagName,
        style: elemento.style
    });
});

console.log('Atividade 5:', relatorioDeEstilos);
