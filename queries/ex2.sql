# == Exercise 2 ==
# 'SHARP シャープ株式会社' さんをフォローする人のアカウント名を求めよ。
# この下の行にSQL文を書きましょう。
SELECT f.follower_account
FROM user u, follow f 
WHERE u.name = 'SHARP シャープ株式会社'
  and f.followee_account = u.account