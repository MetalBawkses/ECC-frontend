import {IWorkCostExtensions} from './workCostExtensions';

export interface ICostlist {
  ledgerNumber: number;
  matCost: number;
  leaseWorkCost: number;
  workCost: number;
  workCostExtensions: IWorkCostExtensions;
}
