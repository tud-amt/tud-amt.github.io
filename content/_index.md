---
# Leave the homepage title empty to use the site title
title:
date: 2024-10-24
type: landing

sections:
  - block: hero
    content:
      title: "Processing of Advanced Architected Materials"
      image:
        filename: researchthemes.jpg
      text: >
        The PAAM Lab at the [*Faculty of Aerospace Engineering*](https://www.tudelft.nl/lr) at [*Delft University of Technology*](https://www.tudelft.nl) is investigating the structure-processing-property relationship of lightweight architected materials. We combine (self-)assembly, processing and manufacturing methods to architect materials at multiple scales to explore their synergistic properties.

  - block: slider
    content:
      slides:
      - title: Hydrogen Permeation Tool
        content: ...interactive understanding of the permeation physics
        align: left
        background:
          image:
            filename: permeation.PNG
            filters:
              brightness: 0.7
          position: center
          color: '#555'
        link:
          icon: wrench
          icon_pack: fas
          text: Tool Page
          url: ../permeation_tool/Permeation_Tool.html
      - title: Architecting at the smallest scale
        content: ...like growing carbon nanotubes on carbon fibres (Szmyt et al.)
        align: right
        background:
          image:
            filename: 01.jpg
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: Tailoring preforming phase morphologies
        content: ...by tailoring time- and temperature-dependent phase separation between thermosets and thermoplastics (Farooq et al.)
        align: left
        background:
          image:
            filename: 02.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#555'
      - title: Exploring fibre microstructures
        content: ...through advanced imaging methods (Gomarasca et al.)
        align: center
        background:
          image:
            filename: 03.jpg
            filters:
              brightness: 0.5
          position: center
          color: '#333'
      - title: Understanding mesoscopic assembly
        content: ...through bio-inspired approaches (Gulmez et al.)
        align: right
        background:
          image:
            filename: 04.jpg
            filters:
              brightness: 0.5
          position: center
          color: '#333'
      - title: Characterizing microstructures
        content: ...by applying temporal correlation to spatial descriptors (Gomarasca et al.)
        align: left
        background:
          image:
            filename: 05.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#555'
      - title: Translating scientific knowledge to industrial technologies (TapeLab)
        content: ...towards scalable technologies
        align: left
        background:
          image:
            filename: 06.jpg
            filters:
              brightness: 0.7
          position: center
          color: '#555'
        link:
          icon: graduation-cap
          icon_pack: fas
          text: Join Us
          url: ../contact/
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '400px'
      is_fullscreen: false
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 2000

  - block: collection
    content:
      title: Latest Event
      text: ""
      count: 1
      filters:
        folders:
          - event
    design:
      view: card
      columns: '1'
  
# - block: collection
#   content:
#     title: Latest Event
#     subtitle:
#     text:
#     count: 2
#     filters:
#        folders:
#          - event
#       author: ''
#       category: ''
#       exclude_featured: false
#       publication_type: ''
#       tag: ''
#     offset: 0
#     order: desc
#     page_type: post
#   design:
#     view: card
#     columns: '1'

  # - block: markdown
  #   content:
  #     title:
  #     subtitle: ''
  #     text:
  #   design:
  #     columns: '1'
  #     background:
  #       image: 
  #         filename: coders.jpg
  #         filters:
  #           brightness: 1
  #         parallax: false
  #         position: center
  #         size: cover
  #         text_color_light: true
  #     spacing:
  #       padding: ['20px', '0', '20px', '0']
  #     css_class: fullscreen

  - block: collection
    content:
      title: Latest Publications
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