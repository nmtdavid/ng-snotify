import { SnotifyType } from '../types/snotify.type';
import { Snotify } from '../interfaces/snotify.interface';

/**
 * Defines toast style depending on method name
 * @param target any
 * @param propertyKey SnotifyType
 * @param descriptor PropertyDescriptor
 * @returns value: ((...args: any[]) => any)
 */
export function SetToastType(target: any, propertyKey: SnotifyType, descriptor: PropertyDescriptor) {
  return {
    value(...args: any[]) {
      (args[0] as Snotify).config = {
        ...(args[0] as Snotify).config,
        type: propertyKey
      };
      return descriptor.value.apply(this, args);
    }
  };
}
