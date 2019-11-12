# == Exercise 2 ==
# 'SHARP シャープ株式会社' さんをフォローする人の表示名（name)を求めよ。
# この下の行にSQL文を書きましょう。
SELECT u2.name
FROM user u, follow f, user u2 
WHERE u.name = 'SHARP シャープ株式会社'
  and f.followee_account = u.account
  and f.follower_account = u2.account