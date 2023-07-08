---
title: "Day 43: AWS IAM & Groups"
date: 2023-07-06T08:21:51+05:30
draft: false
tags:
-   AWS
- TODO
---

# Goal

Today i completed secion of IAM and Groups (just skipped as most of stuff already known)

Point's i took during session.

-   Groups only contain users 
-   A user can belong to multiple groups. 
-   SID/ID are id that users can provide in policy.
-   Action define permission, resource is list of resource which that permissied will be applied.
-   MFA can be enabled to increase security
-   AWS have cloudshell that have aws cli and we can download and upload file into it.

- IAM Securirty Tools
  - IAM Credentials report (account-level)
  - IAM Access Advisor (user-level) -> gives details of most recently used services.
  - Share responsibility model for IAM
    - User are responsible for users, group, policy, MFA, rotate keys, access patterns and permissions

-   **A statement in an IAM Policy consists of Sid, Effect, Principal, Action, Resource, and Condition. Version is part of the IAM Policy itself, not the statement.**