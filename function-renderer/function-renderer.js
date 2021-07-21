function renderer() {
	let cTag;

	f = (text = ``) => {
	   return `<${cTag}>${text}</${cTag}>`;
	}

	f.element = (tag = cTag) => {
		if (cTag === tag) return cTag;
		else { 
			cTag = tag;
			return (a) => f(a)	
		}		
	}
	return f;
}

/* ===== Level 1 ===== */

var div = renderer();
div.element('div')
console.log(div.element(), "div");

/* ===== Level 2 ===== */

const p = renderer();
p.element("p")

console.log(p(), "<p></p>");
console.log(p.element(), "p");

/* ===== Level 3 ===== */
console.log(p("Text"), "<p>Text</p>");


/* ===== Level 4 ===== */
console.log(renderer().element("p")("Another text"), "<p>Another text</p>");