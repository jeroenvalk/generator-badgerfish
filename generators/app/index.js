var generators = require('yeoman-generator');
module.exports = generators.Base.extend({
	writing : function() {
		var self = this;
		[ '.project', '.classpath', '.gitignore', 'package.json', 'pom.xml', 'Gruntfile.js', 'Gruntfile.json', 'src/test/webapp/index.html',
				'src/test/resources/cd.xml', 'src/test/resources/cdcatalog.xml', 'src/test/resources/cdcatalog.xsl' ].forEach(function(fname) {
			self.fs.copyTpl(self.templatePath(fname), self.destinationPath(fname), {
				artifactId : '',
				version : '0.1.0-SNAPSHOT',
				repo : '',
				author : ''
			});
		});
	}
});
