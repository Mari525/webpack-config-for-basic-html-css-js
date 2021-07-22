const Nodemon = require(`nodemon`);
const NodemonCli = require(`nodemon/lib/cli`);
const Weblog = require(`webpack-log`);
const Lodash = require(`lodash`);

const logger = Weblog ({
  name: `nodemon`
});

const nodemonConfig = {
  delay: `2000`,
  ext: `html`,
  ignore: [
    `build`,
    `node_modules`
  ],
  verbose: true
};

const settings = Lodash.merge({}, nodemonConfig, NodemonCli.parse(process.argv));

Nodemon(settings);

Nodemon.on(`start`, () => {
          logger.info(`Development mode has been started`);
        })
        .on(`quit`, () => {
          logger.warn(`Development mode has been stopped`);
          process.exit();
        })
        .on(`restart`, (files) => {
          logger.info(`Development mode has restarted due to: `, files);
        });
