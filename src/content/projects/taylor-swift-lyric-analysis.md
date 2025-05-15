---
title: Taylor Swift Lyric Analysis
subtitle: "Taylor Swift's Theme Evolution through Lyrics"
description: "How Taylor Swift’s Lyric themes have changed across albums and rerecordings"
pubDate: "2024-04-30"
heroImage: "/personal/images/taylor2-death-lyrics.png"
badge: "DATA VIZ"
tags: ["Tableau", "Google Sheets"]
course: "Personal"
---

This started as a stats assignment but quickly turned into more of a personal project. I wanted to explore how Taylor Swift’s themes — specifically death, love, and marriage — show up across her lyrics, and how those patterns shift from era to era.

I started working on this right before The Tortured Poets Department dropped, so I was especially curious how that album would compare to her earlier ones.

I scraped lyrics from Genius and used keyword matching to track how often those big themes came up. It’s not a perfect method (keywords are tricky!) but it sparked some fun questions and helped me start thinking about lyric analysis through a data lens. Then I visualized the results in Tableau — not my best dashboard ever, but it got the job done. Aesthetically and functionally, there's a lot I'd like to change when I have a chance to revisit it. 

The final result was a tool to explore the emotional tone of each era through three themes:
- Death
- Love
- Marriage

![Love Themes](/personal/images/taylor2-love.png)

I also did an early dive into acousticness and energy, which I later expanded in more detail in my full Taylor Swift EDA for Stats II. 

![Acousticness Themes](/personal/images/taylor2-acoustic.png)

I eventually built out a lyrics tab that lets users toggle between different themes to see how they show up across eras. You can also filter by original releases or re-recordings (including just the added vault tracks from Taylor’s Version albums), and choose between total mentions or repeated lines—so you can compare unique lyrics vs. lines that show up in choruses or refrains.

Themes include:

- Appearance & Reputation
- Conflict & Warfare
- Criminal Activities
- Death & Haunting
- Deception & Dishonesty
- Growing Up & Innocence
- Heartbreak
- Love
- Marriage & Commitment
- Fame as a Prison

![Lies Themes](/personal/images/taylor2-lies.png)

Again, aesthetically, it's not my best work. But it did provide me with a great understanding of the data and a good jumping-off point for my project in the next semester!

<div class="text-center">
  <a 
    href="https://public.tableau.com/app/profile/kaitlyn.barbour/viz/TaylorData_newsource/D_LOVE"
    class="text-primaryPurple text-xl underline hover:text-black"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Dashboard
  </a>
</div>