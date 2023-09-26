export { SyncDescriptor } from "vs/platform/instantiation/common/descriptors";
export {
  IInstantiationService,
  createDecorator,
  refineServiceDecorator,
  ServicesAccessor,
} from "vs/platform/instantiation/common/instantiation";
export type { ServiceIdentifier } from "vs/platform/instantiation/common/instantiation";
export { InstantiationService } from "vs/platform/instantiation/common/instantiationService";
export { ServiceCollection } from "vs/platform/instantiation/common/serviceCollection";

import { getSingletonServiceDescriptors } from "vs/platform/instantiation/common/extensions";
export { getSingletonServiceDescriptors };
