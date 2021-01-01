/** @format */

const {Component} = require('@serverless-devs/s-core');

class MyComponent extends Component {

    async trim(str) {
        let trimLeft = /^\s+/
        let trimRight = /\s+$/
        return str.replace(trimLeft, "").replace(trimRight, "");

    };

    async funConfig(inputs) {
        if (inputs.Properties.Config == undefined || inputs.Properties.Config == "s") {
            inputs.Credentials = await this.credentials(inputs)
            process.env.ACCOUNT_ID = inputs.Credentials.AccountID || inputs.Credentials.accountId || inputs.Credentials.ACCOUNT_ID
            process.env.ACCESS_KEY_ID = inputs.Credentials.AccessKeyID || inputs.Credentials.accessKeyId || inputs.Credentials.ACCESS_KEY_ID
            process.env.ACCESS_KEY_SECRET = inputs.Credentials.AccessKeySecret || inputs.Credentials.accessKeySecret || inputs.Credentials.ACCESS_KEY_SECRET
            if(inputs.Credentials.SecurityToken || inputs.Credentials.securityToken || inputs.Credentials.SECURITY_TOKEN){
                process.env.SECURITY_TOKEN = inputs.Credentials.SecurityToken || inputs.Credentials.securityToken || inputs.Credentials.SECURITY_TOKEN
            }
        }
        process.env.REGION = inputs.Properties.Region || "cn-hangzhou"
    }

    async addTemplate(inputs) {
        if (inputs.Properties.Template) {
            process.argv.push("-t")
            process.argv.push(inputs.Properties.Template)
        }
    }

    async setArgv(args) {
        process.argv = args ? ['', ''].concat(args.split(" ")) : ['', '']
    }

    async init(inputs) {
        await this.funConfig(inputs)
        await this.setArgv(inputs.Args)
        await this.addTemplate(inputs)
        await require('@alicloud/fun/bin/fun-init')
    }

    async config(inputs) {
        await this.setArgv(inputs.Args)
        await this.addTemplate(inputs)
        await require('@alicloud/fun/bin/fun-config')
    }

    async install(inputs) {
        console.log(inputs)
        await this.funConfig(inputs)
        await this.setArgv(inputs.Args)
        await this.addTemplate(inputs)
        await require('@alicloud/fun/bin/fun-install')
    }

    async build(inputs) {
        await this.funConfig(inputs)
        await this.setArgv(inputs.Args)
        await this.addTemplate(inputs)
        await require('@alicloud/fun/bin/fun-build')
    }

    async local(inputs) {
        await this.funConfig(inputs)
        const {Commands, Parameters} = this.args(inputs.Args)
        if (Commands.length == 0) {
            await this.setArgv(inputs.Args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-local')
        } else if (Commands[0] == "invoke") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-local-invoke')
        } else if (Commands[0] == "start") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-local-start')
        }
    }

    async edge(inputs) {
        await this.funConfig(inputs)
        const {Commands, Parameters} = this.args(inputs.Args)
        if (Commands.length == 0) {
            await this.setArgv(inputs.Args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-edge')
        } else if (Commands[0] == "invoke") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-edge-invoke')
        } else if (Commands[0] == "start") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-edge-start')
        } else if (Commands[0] == "stop") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-edge-stop')
        }
    }

    async validate(inputs) {
        await this.funConfig(inputs)
        await this.setArgv(inputs.Args)
        await this.addTemplate(inputs)
        await require('@alicloud/fun/bin/fun-validate')
    }

    async deploy(inputs) {
        await this.funConfig(inputs)
        await this.setArgv(inputs.Args)
        await this.addTemplate(inputs)
        await require('@alicloud/fun/bin/fun-deploy')
    }

    async nas(inputs) {
        await this.funConfig(inputs)
        const {Commands, Parameters} = this.args(inputs.Args)
        if (Commands.length == 0) {
            await this.setArgv(inputs.Args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-nas')
        } else if (Commands[0] == "cp") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-nas-cp')
        } else if (Commands[0] == "info") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-nas-info')
        } else if (Commands[0] == "init") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-nas-init')
        } else if (Commands[0] == "ls") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-nas-ls')
        } else if (Commands[0] == "rm") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-nas-rm')
        } else if (Commands[0] == "sync") {
            const args = await this.trim(inputs.Args.replace(Commands[0], ""))
            await this.setArgv(args)
            await this.addTemplate(inputs)
            await require('@alicloud/fun/bin/fun-nas-sync')
        }
    }

    async package(inputs) {
        await this.funConfig(inputs)
        await this.setArgv(inputs.Args)
        await this.addTemplate(inputs)
        await require('@alicloud/fun/bin/fun-package')
    }

    async invoke(inputs) {
        await this.funConfig(inputs)
        await this.setArgv(inputs.Args)
        await this.addTemplate(inputs)
        await require('@alicloud/fun/bin/fun-invoke')
    }

}

module.exports = MyComponent;
