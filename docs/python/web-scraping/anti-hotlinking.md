# 防盗链

## to Ti

抓取巢视频视频数据

```python
import requests
```

```python
contId = url.split("_")[1]
```

printCcontId)

```python
videoStatus_url =
f"https://www.pearvideo.com/videoStatus. jsp?
headers = {
```

Referer: url # 防盗链,意义:本次请求是由哪个 url

产生的

}

```python
resp = requests.get(videoStatus_url1,
headers=headers)
dic = resp.json()
```

```python
# print(dic)
systemTime = dic['systemTime']
videoUrl = dic["videoInfo"]['videos']['srcUrl"]
videoUrl = videoUrlL.replaceCsystemTime, "cont-
```

```python
                mode="wb") as f:
f.write(requests.get(videoUrlL).content)
```
