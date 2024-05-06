export const funEmojis = [
	"online",
	"offline",
	"typing",
	"calling",
];

export const getRandomEmoji = () => {
	return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};
