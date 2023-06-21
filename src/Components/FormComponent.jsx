
// Reusable Form Component that takes inputs, formData & a submit event

export const FormComponent = ({ inputs, formData, submitEvent }) => {
	console.log(formData)

	return (
		<form
			className="p-4 m-2 flex flex-col gap-4 font-mono text-xl w-full"
			onSubmit={submitEvent}>
			<div className='grid grid-cols-2 gap-6'>
				{/* Map Over the Inputs to display them */}
					{
						inputs.map((input) => {
							return (
								<div key={inputs.indexOf(input)}>
									{input}
								</div>
							)
						})
					}
			</div>
			<input type="submit" className='w-fit bg-blue-700 p-2 rounded-md text-white'/>
		</form>
	)
}