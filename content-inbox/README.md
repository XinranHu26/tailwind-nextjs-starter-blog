# Content Inbox 内容收集箱

这个文件夹是**你的素材暂存区**,不会直接出现在网站上。
你把东西丢进来,然后告诉 Claude "我往 content-inbox 里加了东西",
Claude 会把它们处理好(压缩、重命名、写说明)再放进 `public/` 和 `data/`。

> 这个文件夹已在 `.gitignore` 里排除,原图不会被提交到 GitHub,
> 所以你可以放大尺寸原图,不用担心把仓库撑大。

---

## 放什么,放哪里

| 文件夹 | 放什么 |
|---|---|
| `photos-presentations/` | 会议演讲、海报展示、做 presentation 的照片 |
| `photos-fieldwork/` | 现场数据采集、实验室、设备操作的照片 |
| `photos-personal/` | 个人生活类照片(如果以后想做 Personal 页) |
| `documents/` | CV 新版本、论文 PDF、海报 PDF、证书等 |
| `notes/` | 随手写的文字:新论文信息、新获奖、想改的措辞 |

---

## 照片的命名建议

文件名带上**时间和场合**,Claude 就能自动生成图注,你不用再解释一遍:

```
2025-01_TRB-Washington-DC_lecture.jpg
2025-04_Purdue-Road-School_poster.jpg
2024-07_AHFE-Honolulu_presentation.jpg
2024-09_INDOT-fieldwork_shoveling-data-collection.jpg
```

格式:`年-月_场合地点_做什么.jpg`

如果懒得改名也没关系 —— 直接丢进去,然后在 `notes/` 里写一行
"IMG_4521 是 2025 年 TRB 的演讲照",Claude 会对上。

---

## 照片怎么挑

- **横图优先**,网页上展示效果比竖图好
- 一个场合挑 1–2 张就够,不用全放
- 能看清你本人的优先(讲台上、海报前、操作设备时)
- 原图直接放,不用自己压缩 —— Claude 会处理

---

## notes/ 里可以写什么

随便写,中英文都行,不用排版。比如:

- 新发表的论文(期刊名、年份、DOI)
- 新拿的奖
- 某段 bio 想改成什么说法
- 想加/想删哪个页面
