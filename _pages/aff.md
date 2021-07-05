---
layout: page
title: Test
permalink: /test/
---
<!--
{% assign hours= site.time | date: "%H" | plus:100 %}
{% assign random = page.title.size | plus: hours | modulo: site.data.ads.size %}
-->
<a title="Affiliates" href="{{site.data.affiliates[random].url}}" target="_blank" rel="nofollow">
  <div class="ad-div">
    <p class="ad-p">
      <img class="img-responsive-cent" src="/assets/images/{{site.data.affiliates[random].image}}">
      <br />
      {{ site.data.affiliates[random].text }}</p>
  </div>
</a>
