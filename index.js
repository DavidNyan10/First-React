// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// console.log(h1);

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				<img
					src="https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png"
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt=""
				/>
				<span className="ml-2">
					<b>
						<i>
							<span className="text-warning">
								<b>
									<i>
										<span className="text-success">
											<b>
												<i>
													<span className="text-danger"></span>
												</i>
											</b>
										</span>
									</i>
								</b>
							</span>
						</i>
					</b>
				</span>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Dropdown
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdown"
						>
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
}

// h1 element that says "I'm learning React!"
function MainContent() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1 className="header">
						<span className="text-warning">
							<b>
								<i>
									<span className="text-success">
										<b>
											<i>
												<span className="text-danger">
													<b>
														<i>
															I'm learning React!
														</i>
													</b>
												</span>
											</i>
										</b>
									</span>
								</i>
							</b>
						</span>
					</h1>
					<p>
						<span className="text-warning">
							<b>
								<i>
									<span className="text-success">
										<b>
											<i>
												<span className="text-danger">
													<b>
														<i></i>
													</b>
												</span>
											</i>
										</b>
									</span>
								</i>
							</b>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(
	<div>
		<Navbar />
		<MainContent />
	</div>,
	document.getElementById("root")
);
