---
# Leave the homepage title empty to use the site title
title:
date: 2024-10-24
type: landing

sections:
  - block: hero
    content:
      title: "**P**rocessing of **A**dvanced **A**rchitected **M**aterials"
      text: "Integrating advanced imaging, multi-scale modeling, and innovative manufacturing to engineer structural materials for next-generation aerospace applications"
        
      cta:
        label: 'Explore Our Research'
        url: '../research/'
        icon: arrow-right
        icon_pack: fas
      cta_alt:
        label: 'Join Us'
        url: '../opportunities/'
    design:
      # Full-bleed background image with the lab name/description overlaid on top
      css_class: paam-hero
      background:
        image:
          filename: 01.jpg
          filters:
            brightness: 0.3
          position: center
          size: 
          parallax: false
        slideshow:
          images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"]
          interval: 5000
        color: '#0C2340'
        text_color_light: true
      # Extra top/bottom breathing room so the CTA buttons sit lower and the hero reads as a tall banner, not a narrow strip
      spacing:
        padding: ['140px', '120px', '140px', '120px']

  # ── About the lab section image left, text right)
  - block: hero
    content:
      title: PAAM Lab
      position: center
      text: |
        The PAAM Lab is a research group in the [*Faculty of Aerospace Engineering*](https://www.tudelft.nl/lr) at [*Delft University of Technology*](https://www.tudelft.nl). We investigate the structure-processing-property relationship of lightweight architected materials, combining (self-)assembly, processing and manufacturing methods to architect materials at multiple scales and explore their synergistic properties. [Read more about our research here.](../research/)

        Interested in joining, supporting, or collaborating with the PAAM Lab? [Learn more about ways to work with us.](../opportunities/)
      image:
        filename: researchthemes_updated.jpg
      design:
        flip: true
    design:
      css_class: paam-about
      background:
        color: '#ffffff'

 
  - block: collection
    content:
      title: Recent News
      text: ""
      count: 3
      filters:
        folders:
          - post
      archive:
        enable: true
        text: See all news
    design:
      view: compact
      columns: '2'

  - block: collection
    content:
      title: Recent & Upcoming Events
      text: ""
      count: 3
      filters:
        folders:
          - event
      archive:
        enable: true
        text: See all events
    design:
      view: compact
      columns: '2'

  - block: collection
    content:
      title: Featured Publications
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article-journal'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---