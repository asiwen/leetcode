
## 两个大表join
踩坑：20+万， 30+万记录的两个表关联（noid, year, month, itime四个字段进行关联），如果表中没有索引，那么关联非常慢（1-2小时都没有结果）
解决方案：建立索引，可以安关联字段建立聚簇索引

## 批量数据生成
https://blog.csdn.net/whzhaochao/article/details/49126037 
