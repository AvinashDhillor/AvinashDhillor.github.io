---
title: "Day 41: Building discord bot for user's session tracking using python & SQLite"
date: 2023-07-04T08:21:51+05:30
draft: false
tags:
-   Discord bot
-   SQLite
-   Discord.py
---

## Idea

Since last two days i was busy implementing backend using java but still it was hard to quickly integrate java backend with discord4j (didnt know reactor programming also) so i decided to build in python. This bot provides commands to enter memebers into clan. Tracking users timing and calculating scores of clan. This is hosted in Replit and also kept alive using uptimeRobot which keeps on pinging flask server every 4 minutes.


# Code 

Main.py

```python
import os
import discord
from discord.ext import commands
import sqlite3
from datetime import datetime
from keep_alive import keep_alive

intents = discord.Intents.default()
intents.message_content = True
intents.members = True
file_path = './data.json'
role_name1 = "Hufflepuff"
role_name2 = "Gryffindor"
role_name3 = "Ravenclaw"
role_name4 = "Slytherin"

client = discord.Client(intents=intents)
bot = commands.Bot(command_prefix='!', intents=intents)


def create_connection():
  conn = sqlite3.connect(
    'users.db'
  )  # Connect to the database file or create a new one if it doesn't exist
  return conn


def close_connection(conn):
  conn.close()


def create_table(conn):
  cursor = conn.cursor()
  cursor.execute('''CREATE TABLE IF NOT EXISTS users
                      (userId TEXT PRIMARY KEY,
                       sessionStartTime TEXT,
                       isActive INTEGER,
                       totalScore INTEGER)''')
  conn.commit()


conn = create_connection()
create_table(conn)


@client.event
async def on_ready():
  print('We have logged in as {0.user}'.format(client))


async def calc_clans_score(message):
  guild = message.guild

  # Find the role based on the role name
  role1 = discord.utils.get(guild.roles, name=role_name1)
  role2 = discord.utils.get(guild.roles, name=role_name2)
  role3 = discord.utils.get(guild.roles, name=role_name3)
  role4 = discord.utils.get(guild.roles, name=role_name4)

  if role1 is None or role2 is None or role3 is None or role4 is None:
    await message.channel.send(
      f"Role {role_name1} or {role_name2} or {role_name3} or {role_name4} not found."
    )
    return

  # Filter members based on the role
  members_with_role1 = role1.members
  members_with_role2 = role2.members
  members_with_role3 = role3.members
  members_with_role4 = role4.members

  member_id1 = [member.id for member in members_with_role1]
  member_id2 = [member.id for member in members_with_role2]
  member_id3 = [member.id for member in members_with_role3]
  member_id4 = [member.id for member in members_with_role4]

  score1 = get_total_score_by_ids(member_id1)
  score2 = get_total_score_by_ids(member_id2)
  score3 = get_total_score_by_ids(member_id3)
  score4 = get_total_score_by_ids(member_id4)

  score1 = round(score1, 2)
  score2 = round(score2, 2)
  score3 = round(score3, 2)
  score4 = round(score4, 2)

  await message.channel.send(
    f"`{role_name1}` score: `{score1}` \n`{role_name2}` score: `{score2}`\n`{role_name3}` score: `{score3}`\n`{role_name4}` score: `{score4}`"
  )


def get_member_data_sorted_by_score(member_ids):
  cursor = conn.cursor()

  placeholders = ",".join("?" * len(member_ids))
  query = f"SELECT * FROM users WHERE userId IN ({placeholders}) ORDER BY totalScore DESC"
  cursor.execute(query, member_ids)

  member_data = cursor.fetchall()
  return member_data


def reset_all_members_score():
  cursor = conn.cursor()

  query = f"UPDATE users SET totalScore = 0 WHERE totalScore != 0"
  cursor.execute(query)


async def build_leader_board(message):
  guild = message.guild
  content = message.content
  arg = content.split(' ')[1]
  arg = arg.capitalize()
  role = discord.utils.get(guild.roles, name=arg)

  if role is None:
    await message.channel.send(f"Role {arg} not found.")
    return

  # Filter members based on the role
  members_with_role = role.members

  # Output the list of members
  member_ids = [member.id for member in members_with_role]

  sorted_member_data = get_member_data_sorted_by_score(member_ids)

  final_message = f"`{arg}` Leaders 🎉 :\n\n"

  if sorted_member_data:
    for data in sorted_member_data:
      final_message += f'<@{data[0]}> ->  `{data[3]}`\n'
  else:
    print("No member data found")

  await message.channel.send(final_message)


@client.event
async def on_message(message):
  if message.author == client.user:
    return

  if message.content.startswith('$clans'):
    guild = message.guild

    # Find the role based on the role name
    role1 = discord.utils.get(guild.roles, name=role_name1)
    role2 = discord.utils.get(guild.roles, name=role_name2)
    role3 = discord.utils.get(guild.roles, name=role_name3)
    role4 = discord.utils.get(guild.roles, name=role_name4)

    if role1 is None or role2 is None or role3 is None or role4 is None:
      await message.channel.send(
        f"Role {role_name1} or {role_name2} or {role_name3} or {role_name4} not found."
      )
      return

    # Filter members based on the role
    members_with_role1 = role1.members
    members_with_role2 = role2.members
    members_with_role3 = role3.members
    members_with_role4 = role4.members

    member_names1 = [member.display_name for member in members_with_role1]
    member_names2 = [member.display_name for member in members_with_role2]
    member_names3 = [member.display_name for member in members_with_role3]
    member_names4 = [member.display_name for member in members_with_role4]

    result = f""

    if (len(member_names1) != 0):
      result += f"`{role_name1}` members - `{len(member_names1)}` ```{', '.join(member_names1)}```\n"
    else:
      result += f"`{role_name1}` members - `{len(member_names1)}` ```-```\n"

    if (len(member_names2) != 0):
      result += f"`{role_name2}` members - `{len(member_names2)}` ```{', '.join(member_names2)}```\n"
    else:
      result += f"`{role_name2}` members - `{len(member_names2)}` ```-```\n"

    if (len(member_names3) != 0):
      result += f"`{role_name3}` members - `{len(member_names3)}` ```{', '.join(member_names3)}```\n"
    else:
      result += f"`{role_name3}` members - `{len(member_names3)}` ```-```\n"

    if (len(member_names4) != 0):
      result += f"`{role_name4}` members - `{len(member_names4)}` ```{', '.join(member_names4)}```\n"
    else:
      result += f"`{role_name4}` members - `{len(member_names4)}` ```-```\n"

    await message.channel.send(result)

  if message.content.startswith('$score'):
    await calc_clans_score(message)
  if message.content.startswith('$leaderboard'):
    await build_leader_board(message)
  if message.content.startswith("$reset-score"):
    reset_all_members_score()
    await message.channel.send("Score has been reset.")
  if message.content.startswith("$help"):
    await message.channel.send(
      "Commans :- \n**$score** -> Tells score of clan\n**$clans** -> Show clans and memebers\n**$leaderboard <Clan name>** -> Show leaderboard of clan\n**$reset-score** -> reset score of all members to 0."
    )


channel_id = 1120544303186464889


@client.event
async def on_voice_state_update(member, before, after):
  channel = await member.guild.fetch_channel(channel_id)
  conn = create_connection()
  if before.channel is None and after.channel is not None:
    await channel.send('<@{0}>\'s session is started'.format(member.id))
    current_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    user = get_user_from_database(member.id)
    if (user is not None):
      update_user_in_database(user_id=member.id,
                              session_start_time=current_timestamp,
                              is_active=True,
                              total_score=user[3])
    else:
      update_user_in_database(user_id=member.id,
                              session_start_time=current_timestamp,
                              is_active=True,
                              total_score=0)

  if before.channel is not None and after.channel is None:
    user = get_user_from_database(member.id)
    if (user is not None):
      current_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
      current_timestamp = datetime.strptime(current_timestamp,
                                            "%Y-%m-%d %H:%M:%S")
      start_timestamp = datetime.strptime(user[1], "%Y-%m-%d %H:%M:%S")
      time_differ = current_timestamp - start_timestamp
      score = round(((time_differ.total_seconds() / 3600) * 10), 2)
      totalScore = round(score + user[3], 2)
      update_user_in_database(user_id=member.id,
                              session_start_time=None,
                              is_active=False,
                              total_score=totalScore)

      await channel.send(
        '<@{0}>\'s session is completed. Your earned {1} points, total points are {2}'
        .format(member.id, score, totalScore))

  close_connection(conn)


def update_user_in_database(user_id,
                            session_start_time,
                            is_active,
                            total_score=0):
  cursor = conn.cursor()

  # Check if the user already exists in the database
  cursor.execute('SELECT userId FROM users WHERE userId = ?', (user_id, ))
  existing_user = cursor.fetchone()

  if existing_user:
    # Update the existing user
    cursor.execute(
      'UPDATE users SET sessionStartTime = ?, isActive = ?, totalScore = ? WHERE userId = ?',
      (session_start_time, is_active, total_score, user_id))
  else:
    # Insert a new user
    cursor.execute('INSERT INTO users VALUES (?, ?, ?, ?)',
                   (user_id, session_start_time, is_active, total_score))

  conn.commit()


def get_user_from_database(user_id):
  cursor = conn.cursor()

  # Retrieve the user from the database
  cursor.execute('SELECT * FROM users WHERE userId = ?', (user_id, ))
  user = cursor.fetchone()

  return user


def get_total_score_by_ids(member_ids):
  cursor = conn.cursor()

  placeholders = ",".join("?" * len(member_ids))
  query = f"SELECT SUM(totalScore) FROM users WHERE userId IN ({placeholders})"
  cursor.execute(query, member_ids)

  total_score = cursor.fetchone()[0]
  return total_score if total_score is not None else 0


@bot.command(name="test")
async def get_members_by_role(ctx):
  # Get the server object
  guild = ctx.guild

  role_name = "clan2"

  # Find the role based on the role name
  role = discord.utils.get(guild.roles, name=role_name)

  if role is None:
    await ctx.send(f"Role '{role_name}' not found.")
    return

  # Filter members based on the role
  members_with_role = role.members

  # Output the list of members
  member_names = [member.name for member in members_with_role]
  await ctx.send(
    f"Members with the '{role_name}' role: {', '.join(member_names)}")


my_secret = os.environ['TOKEN']

keep_alive()

client.run(my_secret)

```

I found this workout from freecodecamp video on building discord bot using python.

keep_alive.py

```python
from flask import Flask
from threading import Thread

app = Flask('')

@app.route('/')
def home():
  return "Hello. I am alive!"

def run():
  app.run(host="0.0.0.0", port=8080)

def keep_alive():
  t = Thread(target=run)
  t.start()
```


