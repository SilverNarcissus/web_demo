function cmd_run() {
    var spawn = require('child_process').spawn;
    var free = spawn('python3', ['/Users/SilverNarcissus/Documents/git_project/python-paragraph-analyze']);
// 捕获标准输出并将其打印到控制台
    free.stdout.on('data', function (data) {
        console.log('standard output:\n' + data);
    });
// 捕获标准错误输出并将其打印到控制台
    free.stderr.on('data', function (data) {
        console.log('standard error output:\n' + data);
    });
// 注册子进程关闭事件
    free.on('exit', function (code, signal) {
        console.log('child process eixt ,exit:' + code);
    });
}



