document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementById('shareBtn');

    shareBtn.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    url: window.location.href
                });
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Błąd:', err);
                }
            }
        } else {
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert('Link do strony został skopiowany do schowka!');
            } catch (err) {
                alert('Błąd kopiowania.');
            }
        }
    });
});