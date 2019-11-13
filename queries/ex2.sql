# == Exercise 2 ==
# 'SHARP シャープ株式会社' さんをフォローする人のアカウント名を求めよ。
# この下の行にSQL文を書きましょう。
SELECT f.follower_account
FROM follow f, user u
WHERE f.followee_account = u.account
  and u.name = 'SHARP シャープ株式会社'
