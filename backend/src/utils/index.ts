export const hashStringAsync = async (str: string) => {
	const bcryptHash = await Bun.password.hash(str, {
		algorithm: "bcrypt",
		cost: 4,
	});
	return bcryptHash;
};

export const compareHashAsync = async (str: string, hash: string) => {
	const result = await Bun.password.verify(str, hash);
	return result;
};

export const authGuard = () => {};
