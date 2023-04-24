import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../store/userSlice";

export const DeleteModal = (props) => {
	const [showModal, setShowModal] = useState(false);
	const token = useSelector(selectCurrentToken);

	const handleDelete = async (score_id, token) => {
		const url = `${process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST}/scores/${score_id}`;

		try {
			const response = await fetch(url, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			props.setIsDeleted(!props.isDeleted);

			if (!response.ok) {
				throw new Error("Couldn't delete score");
			}
		} catch (e) {
			console.error("Couldn't delete score", e);
		}
	};

	return (
		<>
			<button
				className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}>
				Delete Score
			</button>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">DELETE SCORE</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-slate-500 text-lg leading-relaxed">
										Are you sure you want to delete the score?
									</p>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}>
										No
									</button>
									<button
										className="bg-red-500 text-red active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => {
											setShowModal(false);
											handleDelete(props.scoreId, token);
										}}>
										DELETE SCORE
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
