build:
	rm -rf build_temp
	mkdir build_temp
	cp -r meta/* build_temp

	cd dashboard && npm run build
	cp -r dashboard/dist/* build_temp

	cd dhis-header-bar && npm run build
	cp dhis-header-bar/dist/dhis-header-bar.js build_temp

	rm -f Landing-Page.zip
	cd build_temp && zip ../Landing-Page.zip -r .

test:
	cd build_temp && npx http-server -p 3000 --proxy https://dev.datim.org --proxu-options.auth YmFvLWFkbWluOktpZXYxOC1XYWdlcy0yNA==
