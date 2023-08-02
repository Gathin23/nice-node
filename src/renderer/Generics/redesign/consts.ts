import { NodeBackgroundId } from 'renderer/assets/images/nodeBackgrounds';
import { NiceNodeRpcTranslation } from 'common/rpcTranslation';

export interface ClientStatusProps {
  updating?: boolean;
  initialized?: boolean; // initial initialization is done
  synchronized?: boolean; // constantly updated from checking current / height slot or block
  lowPeerCount?: boolean;
  updateAvailable?: boolean;
  blocksBehind?: boolean;
  noConnection?: boolean;
  stopped?: boolean;
  error?: boolean;
}

export interface ClientStatsProps {
  currentBlock?: number;
  highestBlock?: number;
  currentSlot?: number;
  highestSlot?: number;
  peers?: number;
  cpuLoad?: number;
  diskUsageGBs?: number;
  rewards?: number;
  balance?: number;
  stake?: number;
}

export interface ClientProps {
  name: NodeBackgroundId;
  version: string;
  nodeType: string;
  status: ClientStatusProps;
  stats: ClientStatsProps;
}

export type NodeAction = 'start' | 'stop' | 'logs' | 'settings';
export interface NodeOverviewProps {
  name: NodeBackgroundId;
  title: string;
  info: string;
  screenType: 'altruistic' | 'client' | 'validator';
  rpcTranslation: NiceNodeRpcTranslation;
  version?: string;
  status: ClientStatusProps;
  stats: ClientStatsProps;
  onAction?: (action: NodeAction) => void;
}

export interface SyncStatusProps {
  ERROR: string;
  INITIALIZING: string;
  CATCHING_UP: string;
  SYNCHRONIZED: string;
  LOW_PEER_COUNT: string;
  BLOCKS_BEHIND: string;
  NO_NETWORK: string;
  STOPPED: string;
}

export const SYNC_STATUS = Object.freeze({
  ERROR: 'error',
  UPDATING: 'updating',
  INITIALIZING: 'initializing',
  CATCHING_UP: 'catchingUp',
  SYNCHRONIZED: 'synchronized',
  LOW_PEER_COUNT: 'lowPeerCount',
  BLOCKS_BEHIND: 'blocksBehind',
  NO_NETWORK: 'noNetwork',
  STOPPED: 'stopped',
});
