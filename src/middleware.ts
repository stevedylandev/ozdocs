import { type NextRequest, NextResponse } from "next/server";

// Version mappings for redirects
const VERSION_REDIRECTS: Record<string, string> = {
	contracts: "contracts/v5.x",
	nile: "nile/v0.x",
	"tools/openzeppelin-monitor": "tools/openzeppelin-monitor/v1.x",
};

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Check if this path needs a version redirect
	for (const [path, redirect] of Object.entries(VERSION_REDIRECTS)) {
		if (pathname === `/${path}` || pathname === `/${path}/`) {
			const url = request.nextUrl.clone();
			url.pathname = `/${redirect}`;
			return NextResponse.redirect(url);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
