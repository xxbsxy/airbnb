const theme = {
	color: {
		primaryColor: '#ff385c',
		secondaryColor: '#00848A'
	},
	textColor: {
		primaryColor: '#484848',
		secondaryColor: '#222'
	},
	mixin: {
		boxShadow: `transition: box-shadow .5s ease;
		&:hover {
			box-shadow: 0 2px 4px rgba(0, 0 ,0, .18);
		}`
	}
}

export default theme