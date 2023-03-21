/* eslint-disable no-restricted-syntax */
import logger from '../logger';
import { runCommand } from './podman';
import { MachineJSON } from './types';

const NICENODE_MACHINE_NAME = 'nicenode-machine';

/**
 * @returns the podman machine created by NiceNode (name NICENODE_MACHINE_NAME)
 */
export const getNiceNodeMachine = async (): Promise<
  MachineJSON | undefined
> => {
  try {
    const result = await runCommand(`machine list --format json`);
    if (!result) {
      // logger.error(`Podman machine ls result returned: ${result}`);
      return undefined;
    }

    try {
      const machines: MachineJSON[] = JSON.parse(result);
      if (Array.isArray(machines)) {
        for (const machine of machines) {
          if (machine && machine.Name === NICENODE_MACHINE_NAME) {
            // logger.info('Podman machine found.');
            return machine;
          }
        }
      }
    } catch (err) {
      logger.error('Error parsing machine ls output');
      logger.error(err);
    }
  } catch (err) {
    logger.error('Error running command podman machine list');
    logger.error(err);
  }
  return undefined;
};

/**
 * @returns false if the machine hasn't been created. true if the machine
 * is created and start command was sent or is already Starting
 */
export const startMachineIfCreated = async (): Promise<boolean> => {
  try {
    const nnMachine = await getNiceNodeMachine();
    if (nnMachine) {
      if (!nnMachine.Running && !nnMachine.Starting) {
        logger.info(
          "Podman machine found, but it isn't running or starting yet. Starting..."
        );
        await runCommand(`machine start ${NICENODE_MACHINE_NAME}`);
        // todoo: validate machine started properly
      }
      return true;
    }
  } catch (err) {
    console.error('Error getting the machine.');
  }
  return false;
};
