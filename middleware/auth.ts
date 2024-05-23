// middleware / auth.ts;
export default defineNuxtRouteMiddleware(async (to, from) => {
	const user = await getCurrentUser();
	const toast = useToast();

	// redirect the user to the login page
	if (!user) {
		toast.add({
			title: "Для доступа к данной странице вам нужно авторизоваться.",
			timeout: 2000,
			color: "flamingo",
			ui: { background: "bg-white dark:bg-neutral-900" },
		});
		return navigateTo({
			path: "/login",
			query: {
				redirect: to.fullPath,
			},
		});
	}
});
