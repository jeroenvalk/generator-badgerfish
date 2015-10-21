var generators = require('yeoman-generator');
module.exports = generators.Base.extend({
	writing : function() {
		var self = this;
		['package.json', 'pom.xml'].forEach(function(fname) {
			self.fs.copyTpl(self.templatePath(fname), self.destinationPath(fname), {
				artifactId : '',
				version: '0.1.0-SNAPSHOT',
				repo: '',
				author: ''
			});			
		});
	}
});
