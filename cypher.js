function caesarCypher(secret, shift) {
	let encrypted = '';

	for (let i = 0; i < secret.length; i++) {
		if (secret[i] === ' ' || secret[i] === '_'||!isNaN(secret[i])) {
			encrypted += secret[i];
			continue;
		}

		let shiftedIndex = secret.charCodeAt(i) + shift;
		if (shiftedIndex > 122) {
			shiftedIndex = shiftedIndex - 26;
			encrypted += String.fromCharCode(shiftedIndex);
		} else {
			encrypted += String.fromCharCode(shiftedIndex);
		}
	}

	return encrypted;
}
