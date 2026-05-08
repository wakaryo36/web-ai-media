import pandas as pd
import matplotlib.pyplot as plt
plt.rcParams["font.family"] = "AppleGothic"

df = pd.read_csv("x_posts.csv")

# いいね率
df["like_rate"] = df["likes"] / df["impressions"]

# クリック率
df["click_rate"] = df["url_clicks"] / df["impressions"]

print("投稿タイプ別平均")
print(df.groupby("type")[["impressions", "likes", "like_rate", "url_clicks", "click_rate"]].mean())

print("\nテーマ別平均")
print(df.groupby("theme")[["impressions", "likes", "like_rate", "url_clicks", "click_rate"]].mean())

print("\n時間帯別平均")
print(df.groupby("time")[["impressions", "likes", "like_rate", "url_clicks", "click_rate"]].mean())

print("\n伸びた投稿TOP5")
print(df.sort_values("impressions", ascending=False).head(5))

# テーマ別インプレッション平均
theme_avg = df.groupby("theme")["impressions"].mean().sort_values(ascending=False)

plt.figure(figsize=(8, 5))
theme_avg.plot(kind="bar")
plt.title("テーマ別 平均インプレッション")
plt.xlabel("テーマ")
plt.ylabel("平均インプレッション")
plt.tight_layout()
plt.savefig("theme_impressions.png")

# 投稿タイプ別いいね率
type_like = df.groupby("type")["like_rate"].mean().sort_values(ascending=False)

plt.figure(figsize=(8, 5))
type_like.plot(kind="bar")
plt.title("投稿タイプ別 平均いいね率")
plt.xlabel("投稿タイプ")
plt.ylabel("平均いいね率")
plt.tight_layout()
plt.savefig("type_like_rate.png")
