mkdir-build:
	mkdir -p build/templates

build-templates: mkdir-build
	npx handlebars resources/templates/* -f build/templates/build.js -c handlebars

build-styles: mkdir-build
	cp -ru resources/styles/ build/

build-front: build-templates build-styles

build-conf: mkdir-build
	cp -ru easyblog.conf.json build/

build: build-front build-conf
	npx tsc --esModuleInterop --strictNullChecks --outDir build src/app.ts

start:
	node run start

clean:
	rm -rdf build
