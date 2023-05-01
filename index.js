#!/usr/bin/env node
const program = require('commander');
// 处理版本
program.version(require('./package.json').version, '-v',"版本号");


const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const ora = require('ora');
// 模板仓库
const templateRepoUrl = "mg0324/mangodoc#template";

// 添加init命令
program
  .command('init')
//   .argument('[first]', 'integer argument')
//   .argument('[second]', 'integer argument')
  .action(async () => {
    const process = ora(`模板下载中，请耐心等待...`);
    process.start();

    try {
        await download(templateRepoUrl, ".");
        process.succeed();  
    } catch (error) {
        process.fail(error.message); 
    }
  })
;

program.parse(process.argv)
