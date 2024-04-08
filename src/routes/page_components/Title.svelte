<script>
	import Socials from './Socials.svelte';
</script>
<div class="wrap">
    <div class="shape">
		<h1 class="title" data-text="Arin Emir">Arin Emir</h1><br>
		<Socials/>
	</div>
    <div class="shape"></div>
    <div class="shape">
        <!-- <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3DPAzwJxrwCre%2Fgiphy.gif&f=1&nofb=1&ipt=dc4dd2260b9ccecc06fc391c3c781a47f6dd210b6e9d1d80c61beb36b618cdc9&ipo=images"> -->
    </div>
</div>
<style>
	/* Text Effect 2 Font*/
	@font-face {
	font-family: "neontubes";
	src: url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.eot");
	src: url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.eot?#iefix")
		format("embedded-opentype"),
		url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.woff2")
		format("woff2"),
		url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.woff")
		format("woff"),
		url("https://bitbucket.org/kennethjensen/webfonts/raw/fc13c1cb430a0e9462da56fe3f421ff7af72db71/neontubes/neontubes-webfont.ttf")
		format("truetype");
	font-weight: normal;
	font-style: normal;
	}
	/* End Text Effect 2 Font*/
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	/* h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
	* {
	margin: 0;
	padding: 0;
	}
	.wrap {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	}
	.shape {
	/* General */
	width: 400px;
	height: 400px;
	padding: 10px;
	background: linear-gradient(64.00916346799386deg, rgba(58, 0, 92,1) 23.44140625%,rgba(58, 0, 92,1) 23.44140625%,rgb(51, 0, 236) 79.84765625%);
	display: flex;
	z-index: 1;
	/* Content */
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: '',monospace;
	color: white;
	/* Animation */
	animation: wave 4.0s ease-in-out infinite;
	&:nth-of-type(2) {
	width: 800px;
	height: 800px;
		position: absolute;
		bottom: -200px;
		left: -400px;
		/* opacity: .3; */
		z-index: 0;
	}
	&:nth-of-type(3) {
	width: 300px;
	height: 300px;
		position: absolute;
		top: 20px;
		right: 0;
		/* opacity: .3; */
		z-index: 0;
	}
	/* Text Effect 1 */

	.title{
	font-size: 450%;
	position: relative;
	&::after, &::before{
		content: attr(data-text);
		text-shadow: 0 0 18px white;
		position: absolute;
		left: -4px;
		text-shadow: none;
		background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3DPAzwJxrwCre%2Fgiphy.gif&f=1&nofb=1&ipt=dc4dd2260b9ccecc06fc391c3c781a47f6dd210b6e9d1d80c61beb36b618cdc9&ipo=images);
		background-clip: text;
		color: transparent;
		mix-blend-mode: lighten;
		pointer-events: none;
	}
	&::before{
		left: -3px;
		mix-blend-mode: lighten;
	}
	}
	}
	
	/* End Text Effect 1 */
	/* Text Effect 2 */
	
	/* .title{
	font-size: 6rem;
	color: #ffd9e2;
	text-shadow: 0 0 0 transparent, 0 0 10px #ff003c,
		0 0 20px rgba(255, 0, 60, 0.5), 0 0 40px #ff003c, 0 0 100px #ff003c,
		0 0 200px #ff003c, 0 0 300px #ff003c, 0 0 500px #ff003c, 0 0 1000px #ff003c;
	animation: blink 4s infinite alternate;
	} */
	
	/* End Text Effect 2 */
	/* Media query to change  content on phone view */
	@media screen and (max-width: 768px) {
		.shape:nth-of-type(2),
		.shape:nth-of-type(3) {
			display: none;
		}
	}


	/* Animation */
	@keyframes wave {
	0%, 100% {
		border-radius: 70% 30% 72% 28% / 27% 61% 39% 73%;
	}
	50% {
		border-radius: 77% 23% 54% 46% / 40% 38% 62% 60%;
	}
	}
	@-webkit-keyframes buzz {
	70% {
		opacity: 0.8;
	}
	}

	@keyframes buzz {
	70% {
		opacity: 0.8;
	}
	}
	@-webkit-keyframes blink {
	40% {
		opacity: 1;
	}
	42% {
		opacity: 0.8;
	}
	43% {
		opacity: 1;
	}
	45% {
		opacity: 0.2;
	}
	46% {
		opacity: 1;
	}
	}
	@keyframes blink {
	40% {
		opacity: 1;
	}
	42% {
		opacity: 0.8;
	}
	43% {
		opacity: 1;
	}
	45% {
		opacity: 0.2;
	}
	46% {
		opacity: 1;
	}
	}
	@media(max-width: 574px) {
		.shape {
		/* General */
		width: 300px;
		height: 300px;
		padding: 10px;
		background: linear-gradient(64.00916346799386deg, rgba(58, 0, 92,1) 23.44140625%,rgba(58, 0, 92,1) 23.44140625%,rgb(51, 0, 236) 79.84765625%);
		display: flex;
		z-index: 1;
		/* Content */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: '',monospace;
		color: white;
		/* Animation */
		animation: wave 4.0s ease-in-out infinite;
		&:nth-of-type(2) {
		width: 800px;
		height: 800px;
			position: absolute;
			bottom: -200px;
			left: -400px;
			/* opacity: .3; */
			z-index: 0;
		}
		&:nth-of-type(3) {
		width: 300px;
		height: 300px;
			position: absolute;
			top: 20px;
			right: 0;
			/* opacity: .3; */
			z-index: 0;
		}
		/* Text Effect 1 */

		.title{
		font-size: 300%;
		position: relative;
		&::after, &::before{
			content: attr(data-text);
			text-shadow: 0 0 18px white;
			position: absolute;
			left: -4px;
			text-shadow: none;
			background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3DPAzwJxrwCre%2Fgiphy.gif&f=1&nofb=1&ipt=dc4dd2260b9ccecc06fc391c3c781a47f6dd210b6e9d1d80c61beb36b618cdc9&ipo=images);
			background-clip: text;
			color: transparent;
			mix-blend-mode: lighten;
			pointer-events: none;
		}
		&::before{
			left: -3px;
			mix-blend-mode: lighten;
		}
		}
	}
}
</style>