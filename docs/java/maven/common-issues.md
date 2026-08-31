# Maven常见问题

![image.png](assets/image-4.png)

- **问题现象：**Maven项目中添加的依赖，未正确下载，造成右侧Maven面板中的依赖报红，再次reload重新加载也不会再下载。

- **产生原因：**由于网络原因，依赖没有下载完整导致的，在maven仓库中生成了**xxx\.lastUpdated**文件，该文件不删除，不会再重新下载。

![image.png](assets/image-59.png)

**解决方案：**

1. 根据maven依赖的坐标，找到仓库中对应的 xxx\.lastUpdated 文件，删除，删除之后重新加载项目即可。

2. 通过命令 \(del /s \*\.lastUpdated\) 批量递归删除指定目录下的 xxx\.lastUpdated 文件，删除之后重新加载项目即可。

3. 重新加载依赖，依赖下载了之后，maven面板可能还会报红，此时可以关闭IDEA，重新打开IDEA加载此项目即可。
