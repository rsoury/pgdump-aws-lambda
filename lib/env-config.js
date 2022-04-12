// env config that is overridden by the Lambda event
module.exports = {
	S3_REGION: process.env.S3_REGION,
	PGDATABASE: process.env.PGDATABASE,
	PGUSER: process.env.PGUSER,
	PGPASSWORD: process.env.PGPASSWORD,
	PGHOST: process.env.PGHOST,
	S3_BUCKET: process.env.S3_BUCKET,
	ROOT: process.env.S3_ROOT,
	ENCRYPT_KEY: process.env.ENCRYPT_KEY
};
