all: build

install:
	npm ci

build: install
	npm run build

clean:
	rm -rf ./build/

# vim: set ts=4 sw=4 autoindent noexpandtab:
