/** @format */

const {Component} = require('@serverless-devs/s-core');

class MyComponent extends Component {
    async funConfig(inputs) {
        if (inputs.Properties.Config == undefined || inputs.Properties.Config == "s") {
            process.env.ACCOUNT_ID = inputs.Credentials.AccountID
            process.env.ACCESS_KEY_ID = inputs.Credentials.AccessKeyID
            process.env.ACCESS_KEY_SECRET = inputs.Credentials.AccessKeySecret
        }
        process.env.REGION = inputs.Properties.Region || "cn-hangzhou"
    }

    async addTemplate(inputs) {
        if(inputs.Properties.Template){
            process.argv.push("-t")
            process.argv.push(inputs.Properties.Template)
        }
    }

    async install(inputs) {
        const {Commands, Parameters} = this.args(inputs.Args)
        process.argv = ['', ''].concat(inputs.Args.split(" "))
        await this.addTemplate(inputs)
        require('@alicloud/fun/bin/fun-install')
    }

    async build(inputs) {
        await this.funConfig(inputs)
        process.argv = ['', ''].concat(inputs.Args.split(" "))
        await this.addTemplate(inputs)
        require('@alicloud/fun/bin/fun-build')
    }

    async local(inputs) {
        await this.funConfig(inputs)
        const {Commands, Parameters} = this.args(inputs.Args)
        if (Commands.length == 0) {
            process.argv = ['', ''].concat(inputs.Args.split(" "))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-local')
        } else if (Commands[0] == "invoke") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-local-invoke')
        } else if (Commands[0] == "start") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-local-start')
        }
    }

    async edge(inputs) {
        await this.funConfig(inputs)
        const {Commands, Parameters} = this.args(inputs.Args)
        if (Commands.length == 0) {
            process.argv = ['', ''].concat(inputs.Args.split(" "))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-edge')
        } else if (Commands[0] == "invoke") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-edge-invoke')
        } else if (Commands[0] == "start") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-edge-start')
        } else if (Commands[0] == "stop") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-edge-stop')
        }
    }

    async validate(inputs) {
        await this.funConfig(inputs)
        process.argv = ['', ''].concat(inputs.Args.split(" "))
        await this.addTemplate(inputs)
        require('@alicloud/fun/bin/fun-validate')
    }

    async deploy(inputs) {
        await this.funConfig(inputs)
        process.argv = ['', ''].concat(inputs.Args.split(" "))
        await this.addTemplate(inputs)
        require('@alicloud/fun/bin/fun-deploy')
    }

    async nas(inputs) {
        await this.funConfig(inputs)
        const {Commands, Parameters} = this.args(inputs.Args)
        if (Commands.length == 0) {
            process.argv = ['', ''].concat(inputs.Args.split(" "))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-nas')
        } else if (Commands[0] == "cp") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-nas-cp')
        } else if (Commands[0] == "info") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-nas-info')
        } else if (Commands[0] == "init") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-nas-init')
        } else if (Commands[0] == "ls") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-nas-ls')
        } else if (Commands[0] == "rm") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-nas-rm')
        } else if (Commands[0] == "sync") {
            process.argv = ['', ''].concat(inputs.Args.split(" ").slice(1,))
            await this.addTemplate(inputs)
            require('@alicloud/fun/bin/fun-nas-sync')
        }
    }

    async package(inputs) {
        await this.funConfig(inputs)
        process.argv = ['', ''].concat(inputs.Args.split(" "))
        await this.addTemplate(inputs)
        require('@alicloud/fun/bin/fun-package')
    }

    async invoke(inputs) {
        await this.funConfig(inputs)
        process.argv = ['', ''].concat(inputs.Args.split(" "))
        await this.addTemplate(inputs)
        require('@alicloud/fun/bin/fun-invoke')
    }

}

module.exports = MyComponent;
