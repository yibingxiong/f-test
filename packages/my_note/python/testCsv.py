import csv
from snownlp import SnowNLP
import matplotlib.pyplot as plt
from wordcloud import WordCloud
wl_space_split = ''
filename = 'E:/vivox20/guanwang-comment-1-1673.csv'

dic = {}
timenum  = 0
sudu = {}
wuliu = {}
pinmu = {}
gongneng = {}
youxi = {}
waiguan = {}
mianbu = {}
totaldic = {}
with open(filename, encoding='gb2312',errors='ignore') as f:
    reader = csv.reader(f)
    for row in reader:
        # 行号从1开始
        content = row[2]
        time = row[3][0:10]
        if(totaldic.get(time)):
          totaldic[time] = totaldic[time] + 1
        else:
          totaldic[time] = 1
        print(time[0:10])
        print(content)
        s = SnowNLP(content)
        for sen in s.sentences:
          t = SnowNLP(sen)
          tags = [x for x in t.tags]
          for k,v in tags:
            if(v == 'n'):
              wl_space_split = wl_space_split + k + ' '
              if(k == '速度'):
                if(sudu.get(time)):
                  sudu[time] = sudu[time] + 1
                else:
                  sudu[time] = 1
              if(k == '物流'):
                if(wuliu.get(time)):
                  wuliu[time] = wuliu[time] + 1
                else:
                  wuliu[time] = 1
              if(k == '屏幕'):
                if(pinmu.get(time)):
                  pinmu[time] = pinmu[time] + 1
                else:
                  pinmu[time] = 1
              if(k == '功能'):
                if(gongneng.get(time)):
                  gongneng[time] = gongneng[time] + 1
                else:
                  gongneng[time] = 1
              if(k == '游戏'):
                if(youxi.get(time)):
                  youxi[time] = youxi[time] + 1
                else:
                  youxi[time] = 1
              if(k == '外观'):
                if(waiguan.get(time)):
                  waiguan[time] = waiguan[time] + 1
                else:
                  waiguan[time] = 1
              if(k == '面部'):
                if(mianbu.get(time)):
                  mianbu[time] = mianbu[time] + 1
                else:
                  mianbu[time] = 1
              if(dic.get(k)):
                dic[k]=dic[k]+1
              else:
                dic[k]=1
nl = []
for k,v in dic.items():
  nl.append({'w':k,'num':v})

dic2 = sorted(nl, key=lambda e: e.__getitem__('num'))

print(dic2)



# 从列表写入csv文件
csvFile2 = open('E:/vivox20/统计数据.csv','w', newline='') # 设置newline，否则两行之间会空一行
writer = csv.writer(csvFile2)
for k in totaldic:
  field1 = 0 # 速度
  field2 = 0 # 物流
  field3 = 0 # 屏幕
  field4 = 0 # 功能
  field5 = 0 # 游戏
  field6 = 0 # 外观
  field7 = 0 # 面部
  if(sudu.get(k)):
    field1 = sudu.get(k)
  if(wuliu.get(k)):
    field2 = wuliu.get(k)
  if(pinmu.get(k)):
    field3 = pinmu.get(k)
  if(gongneng.get(k)):
    field4 = gongneng.get(k)
  if(youxi.get(k)):
    field5 = youxi.get(k)
  if(waiguan.get(k)):
    field6 = waiguan.get(k)
  if(mianbu.get(k)):
    field7 = mianbu.get(k)
  writer.writerow([k,totaldic.get(k),field1,field2,field3,field4,field5,field6,field7])
csvFile2.close()

# total = open('E:/vivox20/每日评论数汇总.csv','w', newline='') # 设置newline，否则两行之间会空一行
# totalWriter = csv.writer(total)
# for k in totaldic:
#   totalWriter.writerow([k,totaldic.get(k)])
# total.close()

# my_wordcloud = WordCloud(font_path='C:/Windows/Fonts/simfang.ttf',background_color='white',width=600,height=600).generate(wl_space_split)
 
# plt.imshow(my_wordcloud)
# plt.axis("off")
# plt.show()