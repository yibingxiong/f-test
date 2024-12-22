from snownlp import SnowNLP
text = '手机质量非常好，非常漂亮！'
s = SnowNLP(text)

# print(s.words)
# tags = [x for x in s.tags]
# print(tags)

# print(s.sentiments)
# print(s.keywords(limit=20))

print(s.sentences)

for sen in s.sentences:
  t = SnowNLP(sen)
  tags = [x for x in t.tags]
  for k,v in tags:
    if(v == 'n'):
      print(k)
  print(tags)