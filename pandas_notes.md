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
