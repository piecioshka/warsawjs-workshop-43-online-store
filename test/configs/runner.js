const TestRunner = require('jest-runner');

module.exports = class SerialRunner extends TestRunner {
    constructor(...attr) {
        super(...attr);
        this.isSerial = true;
    }

    runTests(tests, watcher, onStart, onResult, onFailure, options) {
        return super.runTests(
            tests.sort((a, b) => a.path.localeCompare(b.path)),
            watcher,
            onStart,
            onResult,
            onFailure,
            options,
        );
    }
};
