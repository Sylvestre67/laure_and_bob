exports.config = {
	framework: 'jasmine',
	multiCapabilities: [
		/*{'browserName': 'safari'},
		{'browserName': 'opera'},
		{'browserName': 'firefox'},*/
		{'browserName': 'chrome'}],
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.js']
}