### 删除行/列
* DataFrame.drop(axis=0, inplace=True) 
* del df['colLables']   #drop a column
* deleted = df.pop('colLabel')

### groupy后非聚合操作
示例：
1） 按id分组后，组内各数据进行归一化；
2） 将分组数据在index范围上对齐。

```python
def f(x):
    #print(x.name)
    index = pd.date_range('1/1/2000', periods=10)
    #df0 = pd.DataFrame(data = timeRange, columns=['A', ''])
    df0 = pd.DataFrame(index = index)
    sdf = (x - x.min())/(x.max() - x.min())
    sdf = df0.merge(sdf, how='left', left_index=True, right_index=True)
    sdf['id'] = x.name
    return sdf
    
df = pd.DataFrame(np.random.randn(10, 4),
   index = pd.date_range('1/1/2000', periods=10),
   columns = ['A', 'B', 'C', 'D'])
   
df.insert(0, 'id', [0,0,0,1,2,2,1,1,3,3])

df.groupby('id').apply(f)

```

### transform/apply 采坑
pandas目前的实现，transform/apply会对第一个分组扫描两遍用以确定返回的对象。

### DataFrame遍历
DataFrame最好按列遍历(apply(func,axis=0)), 即看成列向量的组合。
如果按行遍历（apply(func, axis=1）,则可能导致某些列所对象数据类型发生自动转换，导致数据失真。例如 int64 -> float64.

### pandas.Series作为向量进行算术运算
注意两个series对象的index必须一致，否则会导致预想不到的结果

### DataFrame reshape
1. 行/列转换(包含部分转换)
2. 转置、unstack, stack操作
3. dataframe.pivot, dataframe.pivot_table
4. pandas.melt
5. [How to Split a Column into Two Columns in Pandas](https://cmdlinetips.com/2018/11/how-to-split-a-text-column-in-pandas/)

### DataFrame merge/join/concat

### DataFrame 增加行/列

### indexing
1. loc, iloc, []([start:stoped:step], start and stoped includes)

### 图形化工具
1. matplotlib 生成静态图片，原本为印刷而设计。在交互式的notebook环境中使用不便
2. Chaco 比matplotlib对交互式的支持好得多，既可以绘制静态图又可以生成交互式图。要生成**交互式的GUI应用程序**可以使用。
3. mayavi 能集成到IPython以实现交互式使用
#### matplotlib为直方图增加拟合曲线
使用到了matplotlib.mlab.normpdf函数
```python
import numpy as np
import matplotlib.mlab as mlab
import matplotlib.pyplot as plt
import pandas
# Load dataset 鸢尾花iris花冠数据
url =
"https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"
names = ['sepal-length', 'sepal-width','petal-length', 'petal-width', 'class']
dataset = pandas.read_csv(url, names=names)
print(dataset.head(10))
# descriptions
print(dataset.describe())
x = dataset.iloc[:,0] #提取第一列的sepal-length变量
mu =np.mean(x) #计算均值
sigma =np.std(x)
mu,sigma

num_bins = 30 #直方图柱子的数量
n, bins, patches = plt.hist(x, num_bins,normed=1, facecolor='blue', alpha=0.5) 
#直方图函数，x为x轴的值，normed=1表示为概率密度，即和为一，绿色方块，色深参数0.5.返回n个概率，直方块左边线的x值，及各个方块对象 
y = mlab.normpdf(bins, mu, sigma)#拟合一条最佳正态分布曲线y 
plt.plot(bins, y, 'r--') #绘制y的曲线
plt.xlabel('sepal-length') #绘制x轴
plt.ylabel('Probability') #绘制y轴
plt.title(r'Histogram : $\mu=5.8433$,$\sigma=0.8253$')#中文标题 u'xxx' 

plt.subplots_adjust(left=0.15)#左边距 
plt.show() 
```



