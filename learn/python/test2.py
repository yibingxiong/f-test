l = []
l.append({'w':'b','num':2})
l.append({'w':'a','num':1})


l2 = sorted(l, key=lambda e: e.__getitem__('num'))

print(l2)