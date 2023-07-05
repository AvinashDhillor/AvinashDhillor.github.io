---
title: "Day 40: Part 2 - Backend app using java mongodb & spring boot"
date: 2023-07-03T08:21:51+05:30
draft: false
tags:
-   Java
-   Development
-   Spring boot
-   Mongodb
-   CRUD
-   REST
---

# Learning about Mongo Repository

While making this backend i had some learning regarding Mongo Repository. So firstly it provide interface which automatically implement most common used method.

### Example 1 -

```Java
@Repository
public interface ClanRepository extends MongoRepository<Clan, String> {
}

```

This automatically will have all most common used methods.

### Example 2 -

```Java
@Repository
public interface ClanRepository extends MongoRepository<Clan, String> {

    Clan findByClanNameAndServerId(final String clanName, final String serverId);

}
```

In above ### Example we can also write custom method without any defination. Spring boot will automatically manage for us. In above ### Example it will find clan based on clan name and server id.


### Example 3 -

```Java
public interface UserRepository extends MongoRepository<User, String> {
    User findByClan(final Clan clan);

    @Query(value = "{'server' : ?0, 'userId': ?1}")
    User findByServerIdAndUserId(String serverId, String userId);

    List<User> findByServerIdAndClan(final String serverId, final Clan clan);
    User findByUserId(final String userId);
}

```

In above ### Example we can also specify `@Query` or `@Update` inside interface method. 


### Example 4 - 

Using Mongo Template

```Java
  public void addClan(final String serverId, final String clanName) {
        Server server = serverRepository.getOrCreateServer(serverId);

        Clan clan = clanRepository.findByClanNameAndServerId(clanName, server.getId());
        if(clan != null) {
            throw new ClanDatabaseException("Clan already exists.");
        }

        Clan insertedClan = clanRepository.save(new Clan(clanName, server));

        Query query = new Query(Criteria.where("_id").is(server.getId()));
        Update update = new Update().push("clans").value(insertedClan.getId());
        mongoTemplate.updateFirst(query, update, Server.class);
    }
```

We can also use mongo tempalte to do all operations.

---

Source code is available on Github :-

Follow this link - 
https://github.com/AvinashDhillor/MaiClan
