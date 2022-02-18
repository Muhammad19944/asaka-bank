const auth = [
	{
		path: "login",
		name: "Login",
		component: () => import("@/views/Main/Auth/LogIn"),
		meta: {
			linkTextUZ: "Avtorizatsiya",
			linkTextRU: "Авторизация",
			linkTextEN: "Authorization",

			headerTextUZ: "Avtorizatsiya",
			headerTextRU: "Авторизация",
			headerTextEN: "Authorization",


			headerSubTextUZ: "Iltimos, autentifikatsiya qiling",
			headerSubTextRU: "Войдите в свою учетную запись",
			headerSubTextEN: "Sign in to your account"
		},
	},
	{
		path: "register",
		name: "Register",
		component: () => import("@/views/Main/Auth/Register"),
		meta: {
			linkTextUZ: "Ro'yhatdan o'tish",
			linkTextRU: "Зарегистрироваться",
			linkTextEN: "Sign up",

			headerTextUZ: "Ro'yhatdan o'tish",
			headerTextRU: "Зарегистрироваться",
			headerTextEN: "Sign up"
		}
	},
	{
		path: "register/status/:id",
		name: "RegisterStatus",
		props: true,
		component: () => import("@/views/Main/Auth/RegisterStatus")
	},
	{
		path: "forget",
		name: "Forget",
		component: () => import("@/views/Main/Auth/Forget"),
		meta: {
			linkTextUZ: "Parolni tiklash",
			linkTextRU: "Сброс пароля",
			linkTextEN: "Reset password",

			headerTextUZ: "Parolni tiklash",
			headerTextRU: "Сброс пароля",
			headerTextEN: "Reset password",


			headerSubTextUZ: "Akkount parolini o'zgartirish",
			headerSubTextRU: "Поменять пароль аккаунта",
			headerSubTextEN: "Change account password"
		}
	}
];

export default auth;
