import { writable } from 'svelte/store';
import { browser } from '$app/env';
import db from 'localforage';

export const national = writable([]);

if (browser) {
	(async function () {
		// if (await db.getItem('national')) {
		if (false) {
			national.set(JSON.parse(await db.getItem('national')));
		} else {
			const data = await fetch(`../national-data.json`);
			const jsonData = await data.json();
			national.set(jsonData);
		}

		national.subscribe((x) => db.setItem('national', JSON.stringify(x)));
	})();
}
