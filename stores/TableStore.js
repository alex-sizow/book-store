import { defineStore } from 'pinia';

export const useTableStore = defineStore('TableStore', {
	state: () => ({
		books: [
			{
				book: 'go',
				event: ['', '🎂 Birthday', '⛳ Hollyday'],
				status: '🟡 In progress',
			},
			{
				book: 'went',
				event: ['⛳ Hollyday', '⛳ Hollyday', '👩‍💻 Meeting'],
				status: '🟡 In progress',
			},
			{
				book: 'gone',
				event: ['', '🎂 Birthday', '⛳ Hollyday'],
				status: '🟡 In progress',
			},
			{
				book: 'do',
				event: ['', '⛳ Hollyday', '🎂 Birthday'],
				status: '🟡 In progress',
			},
			{
				book: 'did',
				event: ['', '🎂 Birthday', ''],
				status: '⚪ Stop',
			},
			{
				book: 'done',
				event: ['', '🎂 Birthday', '⛳ Hollyday'],
				status: '🟢 Done',
			},
		],

		dates: ['07.04.2023', '08.04.2023', '09.04.2023'],

		events: ['', '🎂 Birthday', '⛳ Hollyday', '👩‍💻 Meeting'],

		statuses: ['🟡 In progress', '🟢 Done', '⚪ Stop'],
	}),
});
