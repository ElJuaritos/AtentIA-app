/**
 * Cliente de datos — MVP usa mock local sin esperar red.
 */
import { mockData } from '../data/mockData';

export const getChild = async () => ({
  parent: mockData.parent,
  child: mockData.child,
});

export const getDashboard = async () => mockData.dashboard;

export const getCartridges = async () => mockData.cartridges;

export const getReport = async () => mockData.report;

export const getControls = async () => mockData.controls;
