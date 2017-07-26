export class RegExpEscaped extends RegExp {

  private static readonly SPECIALS = [
	  // order matters for these
	    "-"
	  , "["
	  , "]"
	  // order doesn't matter for any of these
	  , "/"
	  , "{"
	  , "}"
	  , "("
	  , ")"
	  , "*"
	  , "+"
	  , "?"
	  , "."
	  , "\\"
	  , "^"
	  , "$"
	  , "|"
	];

	private static readonly RE_ESCAPE = RegExp('[' + RegExpEscaped.SPECIALS.join('\\') + ']', 'g');

	constructor(pattern: RegExp | string, flags?: string) {
		if (typeof pattern === "string") {
			super(RegExpEscaped.escape(pattern), flags);
		} else {
			super(pattern);
		}
	}

	public static escape(text: string): string {
		return text.replace(RegExpEscaped.RE_ESCAPE, "\\$&");
	}
}