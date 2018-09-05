# mush-assignment

office reservations csv data miner

## pre-requests:

node&npm installed on machine:
http://blog.teamtreehouse.com/install-node-js-npm-mac


## how to run ?

from terminal:

0. git clone
1. npm install from repo directory
2. node index.js <CSV-PATH> <YYYY-MM> for running the script
3. npm test for running the tests :)


## output samples:

2013-01: expected revenue: $8,100, expected total capacity of the unreserved offices: 254
2013-06: expected revenue: $15,150, expected total capacity of the unreserved offices: 241
2014-03: expected revenue: $37,214.516, expected total capacity of the unreserved offices: 203
2014-09: expected revenue: $86,700, expected total capacity of the unreserved offices: 120
2015-07: expected revenue: $76,225.806, expected total capacity of the unreserved offices: 135



## How much time did you spend?

5 hours net

## What was the most difficult thing for you?

calc days function

## What technical debt would you pay if you had one more iteration ?

- support large files using streaming
- handle corrupted data

## Assumptions

- file is with valid data