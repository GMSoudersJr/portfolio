<script>
</script>

<div id="about-me-text">
	<p>
		After graduating with a BS degree from Cornell Univeristy, I took a leap and traveled half-way
		around the world. My journey stopped in South Korea, where I've been teaching and inspiring
		others for over 15 years. During that time, and my curiosity led me to dive into the world of
		tech. Starting with HTML, CSS, and Javascript on freeCodeCamp.org, I quickly progressed, earning
		a full-stack developer certification and venturing into Python for personal projects.
	</p>
	<p>
		My coding journey expanded to include Django, React Native, and a prototype for a
		delivery-sharing app, though it unfortunately didn't secure funding. I've also dabbled with
		Raspberry Pi and Linux, enhancing my skills in bash, vim, tmux, and terminal commands. This
		technical proficiency landed me a role at a startup, where I revamped a codebase, added new
		features, and debugged in React.js.
	</p>
	<p>
		Coding for me is about automating tasks, saving time, and optimizing tedious processes. I enjoy
		devising efficient, accurate solutions for things like PO Sheets, invoices, and reports. Outside
		of coding, I keep active by running and playing golf, reconnecting with running as a hobby and
		discovering a passion for golf.
	</p>
</div>

<style>
	p {
		max-width: 600px;
		color: var(--contentText);
		font-size: 18px;
		line-height: 27px;
		font-family: var(--contentTextFontFamily);
		text-wrap: balance;
	}

	#about-me-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
	}
	p:first-child {
		margin-top: 0;
	}

	@media screen and (max-width: 80em) {
		p:first-child {
			margin-top: revert;
		}
	}
</style>
