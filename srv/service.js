const cds = require('@sap/cds');

class service extends cds.ApplicationService {

    async init() {

        this.on('READ', 'Names', async (req) => {
            console.log('HELLO KLASMEYT!');
        });

        await super.init();
    };
};

module.exports = service;