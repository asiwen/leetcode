## 常用的方法
统计检验的方法主要有SW检验、KS检验（卡方检验）、AD检验、W检验、ADF检验、T检验、U检验、F检验。

### KS检验
KS检验与t-检验之类的其他方法不同是KS检验不需要知道数据的分布情况，可以算是一种非参数检验方法。
当然这样方便的代价就是当检验的数据分布符合特定的分布事，KS检验的灵敏度没有相应的检验来的高。在样本量比较小的时候，KS检验最为非参数检验在分析两组数据之间是否不同时相当常用。

### T检验
t-检验的假设是检验的数据满足正态分布，否则对于小样本不满足正态分布的数据用t-检验就会造成较大的偏差，虽然对于大样本不满足正态分布的数据而言t-检验还是相当精确有效的手段。

### 单位根检验

常见的单位根检验方法有DF检、ADF检验和PP检验
单位根检验是指检验序列中是否存在单位根，因为存在单位根就是非平稳时间序列了。单位根就是指单位根过程，可以证明，序列中存在单位根过程就不平稳，会使回归分析中存在伪回归
