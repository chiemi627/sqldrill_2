# == Exercise 2 ==
# 'SHARP シャープ株式会社' さんをフォローする人の表示名（name)を求めよ。
# この下の行にSQL文を書きましょう。
SELECT u2.name
FROM user u1, user u2, follow f
WHERE u1.name = 'SHARP シャープ株式会社'
  and u1.account = f.followee_account
  and u2.account = f.follower_account
