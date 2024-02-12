const GenderCheckbox = () => {
	return (
		<div className='flex text-white gap-3'>
			<div className='form-control'>
				<label className="label gap-2 cursor-pointer">
					<span className='label-text'>Male</span>
					<input type='checkbox' className='checkbox border-slate-900 mx-2' />
				</label>
			</div>
			<div className='form-control'>
				<label className="label gap-2 cursor-pointer">
					<span className='label-text'>Female</span>
					<input type='checkbox' className='checkbox border-slate-900 mx-2' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;