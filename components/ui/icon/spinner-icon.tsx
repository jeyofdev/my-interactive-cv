const SpinnerIcon = () => {
	return (
		<div className="flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-2xl">
			<span className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
		</div>
	);
};

export default SpinnerIcon;
