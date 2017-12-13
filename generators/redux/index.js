const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(["redux", "react-redux", "async-action-creator"], {
      save: true
    })
  }

  writing() {
    this.fs.copy(
      this.templatePath("store"),
      this.destinationPath("./src/store")
    )
  }
}
