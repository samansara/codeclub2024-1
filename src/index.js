/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

var src_default = {
	async fetch(request, env, ctx) {
		if (request.method == "POST") {
			return Response.json({ Success: "Request was HTTP POST" });
		}
		else {
			return Response.json({ Error: 'HTTP Method was not POST' });
		}
	}
};

export {
	src_default as default
}