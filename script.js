document.addEventListener('DOMContentLoaded', () => {
	const shareBtn = document.getElementById('shareBtn')

	shareBtn.addEventListener('click', async () => {
		const shareData = {
			title: 'Sylwester w TV 2025',
			text: 'Sprawdź listę gwiazd na Sylwestra w TVP 2, Polsacie i Republice!',
			url: window.location.href,
		}

		if (navigator.share) {
			try {
				await navigator.share(shareData)
			} catch (err) {
				console.log('Użytkownik anulował udostępnianie lub wystąpił błąd:', err)
			}
		} else {
			try {
				await navigator.clipboard.writeText(window.location.href)
				alert('Link skopiowany. Możesz przesłać go znajomemu.')
			} catch (err) {
				alert('Nie udało się skopiować linku. Skopiuj adres z paska przeglądarki.')
			}
		}
	})
})
