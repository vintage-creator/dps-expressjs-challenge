import sqlite from 'better-sqlite3';
import path from 'path';

const db = new sqlite(path.resolve('./db/db.sqlite3'), {
	fileMustExist: true,
});

function query(
	sql: string,
	params?:
		| { [key: string]: string | number | undefined }
		| (string | number)[],
) {
	const stmt = db.prepare(sql);
	if (Array.isArray(params)) {
		return stmt.all(params);
	} else {
		return params ? stmt.all(params) : stmt.all();
	}
}

function run(
	sql: string,
	params?:
		| { [key: string]: string | number | undefined }
		| (string | number)[],
) {
	const stmt = db.prepare(sql);
	if (Array.isArray(params)) {
		return stmt.run(params);
	} else {
		return params ? stmt.run(params) : stmt.run();
	}
}

export default { query, run };
