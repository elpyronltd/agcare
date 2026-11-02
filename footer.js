function toggleCodeModal() {
    const modal = document.getElementById('codeModal');
    if (modal.classList.contains('opacity-0')) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        modal.classList.add('opacity-0', 'pointer-events-none');
    }
}

function copyCode() {
    const snippet = document.getElementById('codeSnippet').innerText;
    navigator.clipboard.writeText(snippet).then(() => {
        const btn = document.getElementById('copyBtn');
        btn.innerText = 'Copied!';
        setTimeout(() => {
            btn.innerText = 'Copy Snippet';
        }, 2000);
    });
}