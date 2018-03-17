# shiva-shield
shiva validate branches and commit messages for git

^(CSDP-)\d* - start with commit message
(develop)|(feature|bugfix|)\/(issue-) - branch name
```
$ shiva -t branch -r ^develop|^dev|^development|^(feature|bugfix)\/issue-\d+
$ shiva -t branch -r ^issue-\d*
```
