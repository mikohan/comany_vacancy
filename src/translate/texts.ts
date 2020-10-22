interface TransText {
	[key: string]: { [key: string]: string };
}

export const translateText: TransText = {
	english: {
		myName: 'My name is',
		name: 'Vladimir Vostrikov',
		mainHeading:
			"I'm Full Stack developer with huge knowledge of Online Marketing, and Experience in ecommerce business.",
		learnMore: 'Learn more',
		blog_latestNews: 'Latest News',
		blog_search: 'Search',
		blog_noSearchResults: 'No Search Results',
		blog_categories: 'Categories',
	},
	russian: {
		myName: 'Меня зовут',
		name: 'Владимир Востриков',
		mainHeading:
			'Я разработчик Full Stack с огромными знаниями в области интернет-маркетинга и опытом работы в сфере электронной коммерции.',
		learnMore: 'Узнать больше',
		blog_latestNews: 'Последние посты',
		blog_search: 'Поиск',
		blog_noSearchResults: 'Поиск не дал результатов',
		blog_categories: 'Категории',
	},
	czech: {
		myName: 'Jmenuji se ',
		name: 'Vladimir Vostrikov',
		mainHeading:
			'Jsem vývojář Full Stack s obrovskými znalostmi online marketingu a zkušeností v oblasti elektronického obchodování.',
		learnMore: 'Dozvědět se více',
		blog_latestNews: 'Poslední zprávy',
		blog_search: 'Vyhledávání',
		blog_noSearchResults: 'Žádné výsledky vyhledávání',
		blog_categories: 'Kategorie',
	},
};
