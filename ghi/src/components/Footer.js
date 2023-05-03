import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	return (
		<footer className="fixed bottom-0 bg-hoverpink p-2 inset-x-0 dark:bg-gray-800">
			<div className="w-full p-4 md:flex md:items-center md:justify-between">
				<span className="text-sm sm:text-center dark:text-gray-400">
					© 2023{" "}
					<a href="https://flowbite.com/" className="hover:underline">
						PlayBoxx™
					</a>
					. All Rights Reserved.
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
					<li className="navbar-collapse">
						<a
							href="https://gitlab.com/playboxx/play-boxx"
							target="blank"
							className="mr-4 md:mr-6">
							GitLab Docs
						</a>
					</li>
					<li className="navbar-collapse">
						<a
							href={"/creators" || "/play-boxx/creators"}
							onClick={(e) => {
								e.preventDefault();
								navigate("/creators");
							}}
							className="mr-4 md:mr-6">
							About
						</a>
					</li>
					<li className="navbar-collapse">
						<a
							href={"/contact" || "/play-boxx/contact"}
							onClick={(e) => {
								e.preventDefault();
								navigate("/contact");
							}}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
