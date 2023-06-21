
// Reusable form Input Component that takes in props & renders

export const FormInput = (props) => {
	const {
		 label,
		 type = 'text',
		 name,
		 value,
		 changeEvent,
		} = props;

	return (
			<label className='block'>
					{label}
				<input
					className='block p-2 rounded-md w-full focus:outline-red-600'
					type={type}
					name={name}
					value={value}
					onChange={changeEvent}
					placeholder={`Enter your ${name}`}
					/>
			</label>
	)
}