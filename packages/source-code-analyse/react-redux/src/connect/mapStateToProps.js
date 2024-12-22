
//  wrapMapToPropsConstant, wrapMapToPropsFunc 都是返回这个东西 function initConstantSelector(dispatch, options){}
import { wrapMapToPropsConstant, wrapMapToPropsFunc } from './wrapMapToProps'

export function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function'
    ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps')
    : undefined
}

// match 倒着遍历,会先走这里
export function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(() => ({})) : undefined
}

export default [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]
