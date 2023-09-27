export { SyncDescriptor } from "vs/platform/instantiation/common/descriptors";
export {
  IInstantiationService,
  createDecorator,
  refineServiceDecorator,
} from "vs/platform/instantiation/common/instantiation";

export type { ServicesAccessor } from "vs/platform/instantiation/common/instantiation";

export type { ServiceIdentifier } from "vs/platform/instantiation/common/instantiation";
export { InstantiationService } from "vs/platform/instantiation/common/instantiationService";
export { ServiceCollection } from "vs/platform/instantiation/common/serviceCollection";

export {
  InstantiationType,
  getSingletonServiceDescriptors,
  registerSingleton,
} from "vs/platform/instantiation/common/extensions";
