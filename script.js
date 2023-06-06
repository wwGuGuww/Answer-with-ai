const submitButton = document.getElementById('submitButton');
const inputText = document.getElementById('inputText');
const outputContainer = document.getElementById('outputText');

submitButton.addEventListener('click', () => {
	const userInput = inputText.value.toLowerCase();
	let output = '';

	if (userInput === 'merhaba!') {
		output = 'Merhaba Uygar';
	} else if (userInput === 'nasılsın?') {
		output = 'İyiyim, teşekkür ederim. Siz nasılsınız?';
	} else if (userInput === 'günaydın') {
		output = 'Günaydın! Size nasıl yardımcı olabilirim?';
	} else {
		output = 'Üzgünüm, anlamadım. Lütfen başka bir şey deneyin.';
	}

	// Yeni container oluşturma
	const newMessageContainer = document.createElement('div');
	newMessageContainer.classList.add('message-container');

	// Cevap içeriğini oluşturma
	const outputText = document.createElement('p');
	outputText.classList.add('message');
	newMessageContainer.appendChild(outputText);

	// Containera cevabı ekleme
	outputContainer.appendChild(newMessageContainer);

	// Harf harf animasyonunu gerçekleştirme
	typeAnimation(outputText, output, 0);

	// Inputu temizleme
	inputText.value = '';
});

function typeAnimation(element, text, index) {
	if (index < text.length) {
		element.textContent += text.charAt(index);
		index++;
		setTimeout(() => {
			typeAnimation(element, text, index);
		}, 500); // 100ms aralıklarla harf ekleyerek animasyonu gerçekleştiriyoruz
	}
}
