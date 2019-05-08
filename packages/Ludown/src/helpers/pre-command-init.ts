import { Command, help } from 'commander';
import { printError } from '../utils/printers';

/**
 * @description
 * Applies any pre command initializations.
 */
export const preCommandInit = () => {
	Command.prototype.unknownOption = (arg: string) => {
		printError(`The specified option ("${arg}") is invalid.`);
		help();
	};
};