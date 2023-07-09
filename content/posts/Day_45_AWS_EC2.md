---
title: "Day 43: AWS EC2"
date: 2023-07-09T09:21:51+05:30
draft: false
tags:
-   AWS
---

# Goal

- EC2 Volume   
  - Network Volume (EBS and EFS)
  - Hardwate attached (Ec2 instance core)
- User data can be used to automate tasks. It always run with root user.
- Ec2 instance type
  - General purppose
  - Computer Optimized (C series)
  - Memory Optimized (R series, X1, high memory, z1)
  - Storage Optimized (stoarage intensive tasks) (I series)
- Ports
  - 22 -> SSH
  - 22 -> SFTP
  - 21 -> FTP
  - 80 -> HTTP
  - 443 -> HTTPS
  - 3389 -> Remote Desktop protocol
-   Connecting with Ec2 machine from local
    -   Command = ssh -i key.pem ec2-user@{public ip}
- Ec2 Purchasing option
  - On Demand instance - short workloads, predictable pricing, pay by second
  - Reserved instances (1 and 3 years) - long workloads
  - Convertible reserved instances - long workloads with flexibile instances
  - Saving plan (1 & 3 years) -> commitment to an amount of usage, long workloads
  - Sport instances - short workloads, cheap and can lose instance (less reliable)
  - Dedicated hosts - book an entire physical server, control instance placement
  - Dedicated instances - no other customer will share your hardware
  - Capacity Reservevations - reserve capacity in a specific AZ for any situation.