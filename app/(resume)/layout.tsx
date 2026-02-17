const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className={`relative flex min-h-screen w-full flex-col lg:flex-row max-w-360 mx-auto shadow-2xl bg-surface`}>
			{children}
		</div>
	);
};

export default RootLayout;
