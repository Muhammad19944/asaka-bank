const SmallBusiness = [
    {
        path: 'small-business',
        name: 'SmallBusiness',
        meta: {
            linkTextUZ: "Kichik biznes",
            linkTextRU: "Малый бизнес",
            linkTextEN: "Small business"
        },
        component: () => import('@/views/Main/SmallBusiness'),
        redirect: {name: 'SmallBusinessHome'},
        children: [
            {
                path: 'home',
                name: 'SmallBusinessHome',
                component: () => import('@/views/Main/SmallBusiness/Home')
            },
            // Credits
            {
                path: "credits",
                name: "SmallBusinessCredits",
                component: () => import("@/views/Main/SmallBusiness/Credits"),
                redirect: {name: "SmallBusinessCreditsList"},
                meta: {
                    linkTextUZ: "Kreditlar",
                    linkTextRU: "Кредиты",
                    linkTextEN: "Credits",
                },
                children: [
                    {
                        path: "list",
                        name: "SmallBusinessCreditsList",
                        meta: {
                            linkTextUZ: "Kredit mahsulotlari",
                            linkTextRU: "Кредитные продукты",
                            linkTextEN: "Credit products",

                            headerTextUZ: "Kichik biznes uchun kriditlar",
                            headerTextRU: "Кредиты для малого бизнеса",
                            headerTextEN: "Credits for small business",

                            headerSubTextUZ: "Yangi omadli xaridlar uchun!",
                            headerSubTextRU: "Для новых удачных покупок!",
                            headerSubTextEN: "For new happy purchases!"
                        },
                        component: () => import("@/views/Main/SmallBusiness/Credits/List")
                    },
                    {
                        path: "list/:id",
                        name: "SmallBusinessCreditsDetail",
                        component: () => import("@/views/Main/SmallBusiness/Credits/Detail")
                    }
                ]
            },
            // Cards
            {
                path: "cards",
                name: "SmallBusinessCards",
                component: () => import("@/views/Main/SmallBusiness/Cards"),
                redirect: {name: "SmallBusinessCardsList"},
                meta: {
                    linkTextUZ: "Kartalar",
                    linkTextRU: "Карты",
                    linkTextEN: "Cards"
                },
                children: [
                    {
                        path: "list",
                        name: "SmallBusinessCardsList",
                        redirect: {
                            name: "SmallBusinessCardsListType",
                            params: {
                                type: "all"
                            }
                        },
                        component: () => import("@/views/Main/SmallBusiness/Cards/List"),
                        children: [
                            {
                                path: "type/:type",
                                name: "SmallBusinessCardsListType",
                                meta: {
                                    linkTextUZ: "Kartalar ro'yxati",
                                    linkTextRU: "Список карт",
                                    linkTextEN: "List of cards",

                                    headerTextUZ: "Bank kartalari",
                                    headerTextRU: "Банковские карты",
                                    headerTextEN: "Bank cards",


                                    headerSubTextUZ: "To’lovlarni amalga oshirishda eng qulay vosita",
                                    headerSubTextRU: "Самый удобный способ для осуществления платежей",
                                    headerSubTextEN: "The most convenient way to make payments"
                                },
                                component: () => import("@/views/Main/SmallBusiness/Cards/List/ListType")
                            }
                        ]
                    },
                    {
                        path: "list/:id",
                        name: "SmallBusinessCardsDetail",
                        meta: {
                            linkText: "",
                        },
                        component: () => import("@/views/Main/SmallBusiness/Cards/Detail")
                    }
                ]
            },
            // TradeAcquiring
            {
                path: "trade-acquiring",
                name: "SmallBusinessTradeAcquiring",
                meta: {
                    linkTextUZ: "Savdo ekvayringi",
                    linkTextRU: "Торговый эквайринг",
                    linkTextEN: "Trade acquiring",

                    headerTextUZ: "Savdo ekvayringi",
                    headerTextRU: "Торговый эквайринг",
                    headerTextEN: "Trade acquiring",

                    headerSubTextUZ: "Plastik kartalar bilan to'lash uchun terminal.",
                    headerSubTextRU: "Терминал для оплаты пластиковыми картами.",
                    headerSubTextEN: "Terminal for payment with plastic cards."
                },
                component: () => import("@/views/Main/SmallBusiness/TradeAcquiring")
            },
            // Get a terminal
            {
                path: "application-for-terminal",
                name: "SmallBusinessApplicationForTerminal",
                meta: {
                    linkTextUZ: "Terminalga buyurtma",
                    linkTextRU: "Заказ на терминал",
                    linkTextEN: "Order to the terminal",

                    headerTextUZ: "Savdo ekvayringi uchun ariza",
                    headerTextRU: "Заявка на торговый эквайринг",
                    headerTextEN: "Application for trade acquiring",

                    headerSubTextUZ: "Terminal bilan maksimal foyda oling.",
                    headerSubTextRU: "Получайте максимальную прибыль с терминалом.",
                    headerSubTextEN: "Get the maximum profit with terminal."
                },
                component: () => import("@/views/Main/SmallBusiness/ApplicationTerminal")
            },
            // Terminal Marta
            {
                path: "teminal-marta",
                name: "SmallBusinessTerminalMarta",
                meta: {
                    linkTextUZ: "Terminal Marta",
                    linkTextRU: "Терминал Марта",
                    linkTextEN: "Terminal Marta",

                    headerTextUZ: "Terminal Marta",
                    headerTextRU: "Терминал Марта",
                    headerTextEN: "Terminal Marta",

                    headerSubTextUZ: "Terminal Marta",
                    headerSubTextRU: "Терминал Марта",
                    headerSubTextEN: "Terminal Marta"
                },
                component: () => import("@/views/Main/SmallBusiness/ApplicationTerminal")
            },
            // Financing
            {
                path: "financing",
                name: "SmallBusinessFinancing",
                component: () => import("@/views/Main/SmallBusiness/Financing"),
                redirect: {name: "SmallBusinessFinancingList"},
                children: [
                    {
                        path: "list",
                        name: "SmallBusinessFinancingList",
                        meta: {
                            linkTextUZ: "Savdoni moliyalashtirish",
                            linkTextRU: "Торговое финансирование",
                            linkTextEN: "Trade Finance",

                            headerTextUZ: "Savdoni moliyalashtirish",
                            headerTextRU: "Торговое финансирование",
                            headerTextEN: "Trade Finance",

                            headerSubTextUZ: "Bank iqtisodiy foydali, istiqbolli loyihalarni moliyalashtiriadi.",
                            headerSubTextRU: "Банк финансирует экономически жизнеспособные, перспективные проекты.",
                            headerSubTextEN: "The bank finances economically viable, promising projects."
                        },
                        component: () => import("@/views/Main/SmallBusiness/Financing/List")
                    },

                    {
                        path: "list/:id",
                        name: "SmallBusinessFinancingDetail",
                        component: () => import("@/views/Main/SmallBusiness/Financing/Detail")
                    }
                ]
            },

            {
                path: "documents",
                name: "SmallBusinessDocuments",
                meta: {
                    linkTextUZ: "Hujjatlar",
                    linkTextRU: "Документы",
                    linkTextEN: "Documents",

                    headerTextUZ: "Ma'lumotni yuklab oling",
                    headerTextRU: "Информация для скачивания",
                    headerTextEN: "Download information"
                },
                component: () => import("@/views/Main/SmallBusiness/Documents")
            },

            // Tariffs
            {
                path: "tariffs",
                name: "SmallBusinessTariffs",
                meta: {
                    linkTextUZ: "Bank tariflari",
                    linkTextRU: "Тарифы банка",
                    linkTextEN: "Bank tariffs",

                    headerTextUZ: "Bank tariflari",
                    headerTextRU: "Тарифы банка",
                    headerTextEN: "Bank tariffs",

                    headerSubTextUZ: "Jismoniy va yuridik shaxslarga xizmat ko'rsatish tariflari",
                    headerSubTextRU: "Тарифы на обслуживание физических и юридических лиц",
                    headerSubTextEN: "Tariffs for servicing individuals and legal entities"
                },
                component: () => import("@/views/Main/SmallBusiness/Tariffs")
            },
            // End Tariffs
        ]
    }
]

export default SmallBusiness
