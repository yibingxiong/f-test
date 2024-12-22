// createPropsGetter.ts
export const createPropsGetter = <DP extends object>(defaultProps: DP) => {
  return <P extends Partial<DP>>(props: P) => {
    type PropsExcludingDefaults = Omit<P, keyof DP>
    type RecomposedProps = DP & PropsExcludingDefaults

    return (props as any) as RecomposedProps
  }
}