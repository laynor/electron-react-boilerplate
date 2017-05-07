//@flow
export function copy(...objects:Array<any>) {
  return Object.assign({}, ...objects)
}
