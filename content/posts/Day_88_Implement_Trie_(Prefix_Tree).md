---
title: "Day 88: Leetcode Daily - Implement Trie (Prefix Tree)"
date: 2023-08-03T23:03:48+05:30
draft: false
tags:
-   Medium
image: "/images/post_pics/Day_88_Implement_Trie_(Prefix_Tree)/Cover.png"
---


## Problem - [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree)

### Level - Medium
---

### Solution

---
**Approach:**


---

**Code:**

```java
class Trie {
public:
    /** Initialize your data structure here. */
    Trie *nodes[26];
    bool isEnd;
    Trie() {
        isEnd = false;
        for(int i =0; i < 26; i++) {
            nodes[i] = nullptr;
        }
    }
    
    /** Inserts a word into the trie. */
    void insert(string word) {
        Trie *cur = this;
        for(char c: word) {
            if(!(cur->nodes[c-'a'])) {
                cur->nodes[c-'a'] = new Trie;
            }
            cur = cur->nodes[c-'a'];
        }
        cur->isEnd = true;
    }
    
    /** Returns if the word is in the trie. */
    bool search(string word) {
         Trie *cur = this;
        for(char c: word) {
            if(!(cur->nodes[c-'a'])) {
                return false;
            }
            cur = cur->nodes[c-'a'];
        }
        if(cur->isEnd) return true;
        return false;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    bool startsWith(string prefix) {
            Trie *cur = this;
        for(char c: prefix) {
            if(!(cur->nodes[c-'a'])) {
                return false;
            }
            cur = cur->nodes[c-'a'];
        }

        return true;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */

```
---

**Time Complexity:**
```

```

---

**Space Complexity:**
```

```


