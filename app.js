document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('mouseover', () => {
        document.body.style.cursor = 'pointer';
    });

    node.addEventListener('mouseleave', () => {
        document.body.style.cursor = 'default';
    });
});
