import "./App.css";

function App() {
	const copyEmail = (e : React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		navigator.clipboard.writeText("hpaulbus@gmail.com")
	};

	return (
		<>
			<main>
				<h1>
					Hello, My name is Tree <br /> I'm a Professional Programmer
				</h1>

				<section className="work">
					<h2>My Work</h2>

					<div className="project">
						<h3>Rogue Reborn</h3>
						<p>
							<i>11/2/24 - 11/30/24</i>
						</p>
					</div>
					<div className="project">
						<h3>Fisch</h3>
						<p>
							<i>11/2/24 - 11/30/24</i>
						</p>
					</div>
					<div className="project">
						<h3>Anime Fighters</h3>
						<p>
							<i>11/2/24 - 11/30/24</i>
						</p>
					</div>
					<div className="project">
						<h3>Project Slayers</h3>
						<p>
							<i>11/2/24 - 11/30/24</i>
						</p>
					</div>
				</section>
				<section className="contact">
					<h2>Contact Me</h2>
					<a href="https://github.com/TreeDevv" target="_blank">Github</a>
					<a href="https://x.com/TreeDevv" target="_blank">Twitter</a>
					<a href="https://discord.gg/jFKEnU5FtT" target="_blank">Discord</a>
					<a href="" onClick={copyEmail}>hpaulbus@gmail.com</a>
				</section>
			</main>
		</>
	);
}

export default App;
