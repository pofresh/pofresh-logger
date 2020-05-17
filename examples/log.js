const logger = require('pofresh-logger').getLogger('log', __filename, process.pid);
process.env.LOGGER_LINE = true;
// process.env.RAW_MESSAGE = true; //only message
logger.info('test1');
logger.debug('test2');
logger.warn('test3');
logger.error('test4');