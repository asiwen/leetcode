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

### DataFrame merge/join/concat

### DataFrame 增加行/列


