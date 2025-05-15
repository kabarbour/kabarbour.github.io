---
title: "Taylor EDA"
subtitle: "Taylor Swift's Sound Evolution"
description: "Data-driven look at how Taylor Swift’s sound has changed across albums and rerecordings, built with Spotify audio features."
pubDate: "2025-04-15"
heroImage: "/personal/images/taylor-eda.png"
badge: "DATA VIZ"
tags: ["R", "R Markdown"]
course: "MVIS 5303 Exploring Data (Statistics II)"
---

### **Project Overview**

This project explores how Taylor Swift’s sound has evolved across albums and rerecordings using Spotify audio features and producer credits. Built in R, it visualizes trends in acousticness, danceability, and the impact of producer collaborations across her discography — including comparisons between Taylor’s Version tracks and their originals.

Having never used R for anything this intensive before, I decided to challenge myself by using RMarkdown and CSS to create an interactive webpage. I primarily used ggplot for my charts, ensuring a consistent theme and branding that matched the "Eras Tour" color palette. I also used Photoshop to create friendship-bracelet-themed graphics, which I embedded into the site.

### **The Problem**

When Taylor Swift released her first re-recorded albums, fans debated how different they really sounded. Were the Taylor’s Version tracks just a legal necessity, or a creative reinterpretation? And across her broader career, how much influence have her frequent collaborators had in shaping her eras?

This project sets out to explore those questions using data — looking at **audio features like acousticness and danceability**, paired with **producer credits** from each era. By quantifying her evolving sound, we can better understand her transformation from Nashville country prodigy to pop powerhouse to indie-folk auteur — and back again.

### **The Question**

How much has Taylor’s sound really changed — and how much of that change is driven by her collaborators? This project digs into her production history and audio patterns to see how eras differ sonically, and whether rerecordings reflect artistic reinterpretation or consistency.

### **Audience & Format**

Made for fans and casual listeners who follow data-driven music content. Built as a scrolling R Markdown site with custom color palettes for each era, the visualizations highlight:

- Top producers by era
- Shifts in acousticness and production style
- Differences (or lack thereof) between Taylor’s Version and original tracks

![Average Acousticness value per Era/Album](/personal/images/taylor-acoustic.png) 

### **Key Insights**

- Taylor’s most acoustic eras: *folklore*, *evermore*, and *TTPD*
- Taylor’s Version tracks are slightly less acoustic/danceable on average, but **not statistically significant**
- The **real shift** happens when producer teams change — especially when original collaborators don’t return


![Comparison of Danceability between Original and Taylor's Version](/personal/images/taylor-danceability.png) 

### **Reflection & Next Steps**

This project underscored how rich and multifaceted music data can be. While streaming services provide access to tons of quantitative features, it’s the **context — the producers, the era, the reason behind the rerecording — that gives it meaning**.

With more time, I’d love to:

- Add more lyrical analysis (valence + sentiment)
- Incorporate vocal range or BPM trends
- Build a timeline view for easier navigation across eras

Ultimately, this project helped me quantify what many Swifties already feel: **Taylor’s sound is constantly evolving — and even when she revisits old songs, she’s doing so with new tools, new teams, and a different artistic lens.**


<div class="text-center">
  <a 
    href="https://kabarbour.github.io/taylor/"
    class="text-primaryPurple text-xl underline hover:text-black"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Website
  </a>
</div>