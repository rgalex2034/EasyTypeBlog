mkdir-build:
	mkdir -p build/templates

build-templates: mkdir-build
	npx handlebars templates/* -f build/templates/build.js -c handlebars

build-styles: mkdir-build
	cp -ru styles/ build/

build-front: build-templates build-styles

build: build-front
	npx tsc --esModuleInterop --outDir build src/app.ts

start:
	node run start

clean:
	rm -rdf build
